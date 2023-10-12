const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
// const boxNos = 100;

class Box {
  constructor() {
    this.position = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    };
    this.size = { width: 5, height: 5 };
    this.dx = { x: Math.random() * (1 - -1) + -1, y: 0 };
    this.color = "black";
    // this.dy = 1;
    // this.gravity = 0.1;
    // this.bounce = -0.8;
  }

  draw() {
    c.beginPath();
    c.fillStyle = this.color;
    c.rect(this.position.x, this.position.y, this.size.width, this.size.height);
    c.fill();
  }

  move() {
    this.position.x += this.dx.x;
    this.position.y += this.dx.y;
  }

  update() {
    this.draw();
    this.move();
  }

  checkCollision(otherBoxes, ind) {
    otherBoxes.forEach((element, index) => {
      if (ind === index) return;

      if (
        this.position.x + this.size.width >= element.position.x &&
        this.position.y + this.size.height >= element.position.y &&
        this.position.x <= element.size.width + element.position.x &&
        this.position.y <= element.size.height + element.position.y
      ) {
        this.color = "red";
        element.color = "red";
      } else {
        this.color = "blue";
      }
    });
  }
}

let boxArr = [];
for (let i = 0; i <= 100; i++) {
  boxArr.push(new Box());
}

function loop() {
  c.clearRect(0, 0, canvas.height, canvas.width);
  boxArr.forEach((item, index) => {
    item.update();
    item.checkCollision(boxArr, index);
  });
  requestAnimationFrame(loop);
}
loop();
