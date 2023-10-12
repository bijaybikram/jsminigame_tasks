const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Box {
  constructor() {
    this.position = { x: 100, y: 100 };
    this.size = { width: 50, height: 50 };
    this.velocity = { x: 1, y: 1 };
    this.acceleration = 0.1;
    this.bounce = -0.8;
  }

  draw() {
    c.beginPath();
    c.rect(this.position.x, this.position.y, this.size.width, this.size.height);
    c.fill();
  }

  move() {
    this.velocity.y = this.velocity.y + this.acceleration;
    this.position.y = this.position.y + this.velocity.y;
    // console.log(this.velocity);
  }

  borderCollision() {
    if (this.position.y + this.size.height >= canvas.width) {
      this.position.y = canvas.height - this.size.height; // prevent from sinking
      this.velocity.y = this.velocity.y * this.bounce;
    }
  }
}

const boxObj = new Box();

// Game loop
const animate = () => {
  c.clearRect(0, 0, 400, 400);
  boxObj.draw();
  boxObj.move();
  boxObj.borderCollision();

  requestAnimationFrame(animate);
};
animate();
