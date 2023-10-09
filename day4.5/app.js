const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Box {
  constructor(x, y, color, l) {
    this.x = x;
    this.y = y;
    this.l = l || 40;
    this.b = 40;
    this.color = color || "red";
    this.x_speed = 1;
    this.y_speed = 1;
  }

  draw() {
    c.beginPath();
    c.fillStyle = this.color;
    c.rect(this.x, this.y, this.l, this.b);
    c.fill();
  }

  move() {
    this.x = this.x + this.x_speed;
    this.y = this.y + this.y_speed;

    // this.y += 1;
  }

  checkCollision() {
    if (this.x + this.l > canvas.width) {
      // check collision on right side
      console.log("collide");
      this.x_speed = -1; //return to left
    } else if (this.x < 0) {
      // check collision on left side
      console.log("collide");
      this.x_speed = 1; // return to right
    }

    if (this.y + this.b > canvas.height) {
      // check collision on right side
      console.log("collide");
      this.y_speed = -1; //return to left
    } else if (this.y < 0) {
      // check collision on left side
      console.log("collide");
      this.y_speed = 1; // return to right
    }
  }

  update() {
    this.draw();
    this.move();
    this.checkCollision();
  }
}

const box1 = new Box(0, 0, "yellow");
const box2 = new Box(100, 100, "blue", 60);
const box3 = new Box(300, 20);
// box.l = 50;

// game loop
const animate = () => {
  // update logic here
  c.clearRect(0, 0, canvas.clientWidth, canvas.height);
  box1.update();
  box3.update();
  box2.update();
  //   box.move();
  requestAnimationFrame(animate);
};

animate();
