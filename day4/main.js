const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const random = Math.random() * (350 - 50) + 50;
let x = random;
let y = random;
let r = Math.random() * (100 - 10) + 10;

console.log(random);
// game loop
function animate() {
  c.clearRect(0, 0, 400, 400);

  c.beginPath();
  c.arc(x, y, r, 0, 2 * Math.PI);
  c.fill();

  x += Math.random() * (1 - -1) + -1;
  y += Math.random() * (1 - -1) + -1;
  //   x += 1;
  //   y += 1;
  //   r += 1;

  window.requestAnimationFrame(animate);
}

animate();
