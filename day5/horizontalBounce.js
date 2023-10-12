const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Box {
  constructor() {
    this.position = {
      x: Math.random() * canvas.width,
      y: Math.random() * (canvas.height - 10),
    };
    this.size = { width: 10, height: 10 };
    this.velocity = { x: Math.random() * (1 - -1) + -1, y: 0 };
    // this.velocity = Math.random() * (1 - -1) + -1;
    this.color = "black";
    // this.bounce = -0.1;
  }

  draw() {
    c.beginPath();
    c.fillStyle = this.color;
    c.rect(this.position.x, this.position.y, this.size.width, this.size.height);
    c.fill();
  }

  move() {
    this.position.x += this.velocity.x;
    // this.position.y += this.velocity.y;
  }

  update() {
    this.draw();
    this.move();
  }

  checkCollision(otherBoxes, ind) {
    otherBoxes.forEach((element, index) => {
      if (ind === index) return;

      if (
        this.position.x <= element.position.x + element.size.width &&
        this.position.x + this.size.width >= element.position.x &&
        this.position.y + this.size.height >= element.position.y &&
        this.position.y <= element.position.y + element.size.height
      ) {
        this.velocity.x *= -1;
        // this.position.x = element.position.x + element.size.width;
        element.velocity.x *= -1;

        this.color = "red";
        element.color = "red";
      } else {
        this.color = "blue";
      }
    });
  }

  checkBorderCollision() {
    if (
      this.position.x < 0 ||
      this.position.x + this.size.width > canvas.width
    ) {
      if (this.position.x <= 0) {
        this.position.x = 0;
      }
      if (this.position.x + this.size.width >= canvas.width) {
        this.position.x = canvas.width - this.size.width;
      }
      this.velocity.x *= -1; // Reverse the horizontal velocity
    }
    // if (
    //   this.position.y < 0 ||
    //   this.position.y + this.size.height > canvas.height
    // ) {
    //   this.velocity.y *= -1; // Reverse the vertical velocity
    // }
  }
}

let boxArr = [];
for (let i = 0; i <= 200; i++) {
  boxArr.push(new Box());
}

function loop() {
  c.clearRect(0, 0, canvas.height, canvas.width);
  boxArr.forEach((item, index) => {
    item.update();
    item.checkCollision(boxArr, index);
    item.checkBorderCollision();
  });
  requestAnimationFrame(loop);
}

loop();
