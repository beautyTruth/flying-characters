const canvasEl = document.querySelector("canvas");
const ctx = canvasEl.getContext("2d");
CANVAS_WIDTH = canvasEl.width = 500;
CANVAS_HEIGHT = canvasEl.height = 1000;
const numberOfEnemies = 100;
const enemiesArray = [];

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
    this.x = Math.random() * canvasEl.width;
    this.y = Math.random() * canvasEl.height;
    this.width = 100;
    this.height = 100;
    this.speed = Math.random() * 4 - 2;
  }
  update() {
    this.x += this.speed;
    this.y += this.speed;
  }
  draw() {
    ctx.strokeRect(this.x, this.y, this.width, this.height);
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
  requestAnimationFrame(animate);
}

animate();
