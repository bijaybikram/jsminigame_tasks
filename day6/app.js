const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

// load the music
// Audio()
const backgroundMusic = new Audio();
backgroundMusic.src = "./sounds/music.wav";

const shoot = new Audio();

// load the image
const spaceShip = new Image();
spaceShip.src = "./images/ship3.png";

// play the music
function startPlay() {
  backgroundMusic.play();
  backgroundMusic.loop = true;
}

canvas.addEventListener("click", () => {
  shoot.src = "./sounds/shoot.wav";
  shoot.play();
  shoot.volume = 0.3;
  console.log("shoot!");
});

let y = 0;
const draw = () => {
  c.beginPath();
  c.drawImage(spaceShip, 100, y, 50, 50);
};

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  startPlay();
  y++;
  requestAnimationFrame(animate);
}
animate();
