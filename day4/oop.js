const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
let totalParticles = 50;

class Particle {
  constructor() {
    this.x = Math.random() * (350 - 50) + 50;
    this.y = Math.random() * (350 - 50) + 50;
    this.r = Math.random() * (40 - 5) + 5;
  }

  draw() {
    c.beginPath();
    c.fillStyle = "blue";
    c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    c.fill();
  }
  move() {
    this.x += Math.random() * (1 - -1) + -1;
    this.y += Math.random() * (1 - -1) + -1;
  }
}

const particleArray = [];
for (let i = 0; i < totalParticles; i++) {
  const obj = new Particle();
  particleArray.push(obj);
}

// game loop
function animate() {
  c.clearRect(0, 0, 400, 400);
  for (let i = 0; i < totalParticles; i++) {
    particleArray[i].draw();
    particleArray[i].move();
  }
  requestAnimationFrame(animate);
}

animate();
