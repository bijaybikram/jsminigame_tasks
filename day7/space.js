const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
// Make the canvas size equal to window screen size
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

const player1 = new Player();
let allBullets = [];

function shootSound() {
  const shoot = new Audio();
  shoot.src = "./sounds/shoot.wav";
  shoot.play();
}
function backgroundSound() {
  const music = new Audio();
  music.src = "./sounds/music.wav";
  music.play();
  music.loop = true;
  music.volume = 0.05;
}

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  player1.update();
  for (let i = 0; i < allBullets.length; i++) {
    allBullets[i].update();
    // console.log("bullets");
  }
  requestAnimationFrame(animate);
}
animate();

// all listener below this

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp") player1.velocity.y = -2;
  if (event.code === "ArrowDown") player1.velocity.y = 2;
  if (event.code === "ArrowLeft") player1.velocity.x = -2;
  if (event.code === "ArrowRight") player1.velocity.x = 2;
  if (event.code === "Space") {
    allBullets.push(
      new Bullet(player1.position.x + player1.size / 5, player1.position.y)
    );
    shootSound();
    backgroundSound();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code === "ArrowUp") player1.velocity.y = 0;
  if (event.code === "ArrowDown") player1.velocity.y = 0;
  if (event.code === "ArrowLeft") player1.velocity.x = 0;
  if (event.code === "ArrowRight") player1.velocity.x = 0;
});
