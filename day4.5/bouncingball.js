const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
const ballArray = [];
const ballnos = 100;

const randomColor = () => {
  // generate random values for red green and blue
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);

  const colors = `rgb(${red}, ${green}, ${blue})`;
  return colors;
};

class Ball {
  constructor(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.x_speed = 2;
    this.y_speed = 1;
    this.gravity = 0.1;
  }

  draw() {
    c.beginPath();
    c.fillStyle = this.color;
    c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    c.fill();
  }

  move() {
    this.y_speed += this.gravity;
    this.x = this.x + this.x_speed;
    this.y = this.y + this.y_speed;

    // this.y += 1;
  }

  checkCollision() {
    if (this.x + this.r > canvas.width) {
      // check collision on right side
      console.log("collide");
      this.x_speed = -2; //return to left
      //   this.color = randomColor();
    } else if (this.x - this.r < 0) {
      // check collision on left side
      console.log("collide");
      this.x_speed = 2; // return to right
      //   this.color = randomColor();
    }

    if (this.y + this.r > canvas.height) {
      // check collision on right side
      console.log("collide");
      this.y_speed = -1; //return to left
      this.gravity = -0.1;
      this.color = randomColor();
    } else if (this.y - this.r < 0) {
      // check collision on left side
      console.log("collide");
      this.y_speed = 1; // return to right
      this.gravity = 0.1;
      //   this.color = randomColor();
    }
  }

  update() {
    this.draw();
    this.move();
    this.checkCollision();
  }
}

for (let i = 0; i < ballnos; i++) {
  const x = Math.random() * (500 - 0) + 0;
  const y = Math.random() * (500 - 0) + 0;
  const r = Math.random() * (30 - 5) + 5;
  const color = randomColor();
  const balls = new Ball(x, y, r, color);
  ballArray.push(balls);
}

// game loop
const animate = () => {
  // update logic here
  c.clearRect(0, 0, canvas.clientWidth, canvas.height);
  for (let i = 0; i < ballnos; i++) {
    ballArray[i].update();
  }
  requestAnimationFrame(animate);
};

animate();
