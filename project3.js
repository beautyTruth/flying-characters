// bawitdaba da dang da dang diggy diggy
const canvasEl = document.querySelector("canvas");
const ctx = canvasEl.getContext("2d");
CANVAS_WIDTH = canvasEl.width = 500;
CANVAS_HEIGHT = canvasEl.height = 1000;
const numberOfEnemies = 200;
const enemiesArray = [];

let gameFrame = 0;

class Enemy {
  constructor() {
    this.image = new Image();
    this.image.src = "enemy3.png";
    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 218;
    this.spriteHeight = 177;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvasEl.width - this.width);
    this.y = Math.random() * (canvasEl.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.angle = Math.random() * 500;
    this.angleSpeed = Math.random() * 1.5 + 0.5;
    // this.curve = Math.random() * 200 + 50;
  }
  update() {
    this.x =
      (canvasEl.width / 2) * Math.sin((this.angle * Math.PI) / 180) +
      (canvasEl.width / 2 - this.width / 2);
    this.y =
      (canvasEl.height / 2) * Math.cos((this.angle * Math.PI) / 700) +
      (canvasEl.height / 2 - this.height / 2);
    this.angle += this.angleSpeed;
    if (this.x + this.width < 0) this.x = canvasEl.width;
    // animation of the sprites
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    // ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new Enemy());
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  enemiesArray.forEach((boobie) => {
    boobie.update();
    boobie.draw();
  });
  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
