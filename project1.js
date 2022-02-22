const canvasEl = document.querySelector("canvas");
const ctx = canvasEl.getContext("2d");
CANVAS_WIDTH = canvasEl.width = 500;
CANVAS_HEIGHT = canvasEl.height = 1000;
const numberOfEnemies = 100;
const enemiesArray = [];

let gameFrame = 0;

/*
enemy1 = {
  x: 0,
  y: 0,
  width: 200,
  height: 200,
};
*/

class Enemy {
  constructor() {
    this.image = new Image();
    this.image.src = "enemy1.png";
    // this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvasEl.width - this.width);
    this.y = Math.random() * (canvasEl.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }
  update() {
    this.x += Math.random() * 15 - 7.5;
    this.y += Math.random() * 10 - 5;
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
