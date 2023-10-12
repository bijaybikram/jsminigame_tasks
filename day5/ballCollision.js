const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Ball {
  constructor() {
    this.position = {
      x: Math.random() * canvas.width,
      y: Math.floor(Math.random() * (canvas.height - 20) + 10),
    };
    this.radius = 10;
    this.velocity = { x: Math.random() * (1 - -1) + -1, y: 0 };
    // this.velocity = Math.random() * (1 - -1) + -1;
    this.color = "black";
    // this.bounce = -0.1;
  }

  draw() {
    c.beginPath();
    c.fillStyle = this.color;
    c.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
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

  checkCollision(otherBalls, ind) {
    otherBalls.forEach((element, index) => {
      if (ind === index) return;

      if (
        this.position.x - this.radius <= element.position.x + element.radius &&
        this.position.x + this.radius >= element.position.x - element.radius &&
        this.position.y + this.radius >= element.position.y - element.radius &&
        this.position.y - this.radius <= element.position.y + element.radius
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
      this.position.x - this.radius < 0 ||
      this.position.x + this.radius > canvas.width
    ) {
      if (this.position.x - this.radius <= 0) {
        this.position.x = this.radius;
      }
      if (this.position.x + this.radius >= canvas.width) {
        this.position.x = canvas.width - this.radius;
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

let ballArr = [];
for (let i = 0; i <= 100; i++) {
  ballArr.push(new Ball());
}

function loop() {
  c.clearRect(0, 0, canvas.height, canvas.width);
  ballArr.forEach((item, index) => {
    item.update();
    item.checkCollision(ballArr, index);
    item.checkBorderCollision();
  });
  requestAnimationFrame(loop);
}

loop();
