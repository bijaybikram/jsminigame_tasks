const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
let totalParticles = 100;

class Particle {
  constructor() {
    this.x = Math.random() * 500;
    this.y = Math.random() * 500;
    this.r = Math.random() * (40 - 5) + 5;
    this.dv = Math.ceil(Math.random() * 2);
    this.color = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()}`;
    // let xMin
    // this.dy = Math.ceil(Math.random() * 2);
    // this.yMin
    this.gravity = 0.1;
    this.bounceForce = -0.8;
  }
  //   color() {
  //     c.fillStyle = `#${Math.floor(Math.random() * 16777215)
  //       .toString(16)
  //       .padStart(6, "0")
  //       .toUpperCase()}`;
  //   }
  draw() {
    c.beginPath();
    c.fillStyle = this.color;
    c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    c.fill();
  }

  moveHor() {
    this.x += this.dv;
  }
  moveVer() {
    this.y += this.dv;
    this.dv += this.gravity; //apply gravity to vertical velocity
  }

  //check Collision
  bounce() {
    if (this.x + this.r > canvas.width || this.x - this.r == 0) {
      // reverse horizontal velocity when hitting the walls
      this.dv = -this.dv;
    }
    if (this.y + this.r > canvas.height) {
      this.dv = -this.dv;
    }
  }

  bounceVertical() {
    if (y <= canvas.width) {
      y += dy;
    }
    if (y == canvas.width) {
      y -= dy;
      dy += gravity;
    }
  }
}

const particleArray = [];
for (let i = 0; i < totalParticles; i++) {
  const ball = new Particle();
  particleArray.push(ball);
}

function animate() {
  c.clearRect(0, 0, 500, 500);
  for (let i = 0; i < totalParticles; i++) {
    particleArray[i].draw();
    particleArray[i].moveHor();
    particleArray[i].moveVer();
    particleArray[i].bounce();

    // particleArray[i].bounceVertical();
  }

  requestAnimationFrame(animate);
}
animate();
