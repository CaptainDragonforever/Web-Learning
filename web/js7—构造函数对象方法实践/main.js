// 设置画布

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const countText = document.querySelector('p')

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
//设置空的数组放置彩球，创建吃球的圈
const size = random(10, 20)
let balls = [];
let devil = new EvilCircle(
  // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
  random(0 + size, width - size),
  random(0 + size, height - size),
  20,
  20,
  true,
)

// 生成随机数的函数

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}
function randomColor() {
  return 'rgb(' +
    random(0, 255) + ', ' +
    random(0, 255) + ', ' +
    random(0, 255) + ')';
}
//构造函数
function Shape(x, y, velX, velY, exists) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = exists
}
//彩球的构造函数
function Ball(x, y, velX, velY, exists, color, size) {
  //继承构造函数
  Shape.call(this, x, y, velX, velY, exists)
  this.color = color
  this.size = size
}
//
Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

//构造函数和类的方法不能用箭头函数，因为箭头函数没有this，或者说this是window
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}
//碰到边缘就反弹
Ball.prototype.update = function () {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}
//判断距离是否小于两球球心距离，是则染成同色
Ball.prototype.collisionDetect = function () {
  for (let j = 0; j < balls.length; j++) {
    if (this !== balls[j]) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = randomColor();
      }
    }
  }
}

//恶魔圈的构造函数
function EvilCircle(x, y, velX, velY, exists) {
  Shape.call(this, x, y, 20, 20, exists)
  this.color = 'white'
  this.size = 10
}

EvilCircle.prototype.draw = function () {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.stroke();
}
EvilCircle.prototype.checkBound = function () {
  if ((this.x + this.size) >= width) {
    this.x -= this.size;
  }

  if ((this.x - this.size) <= 0) {
    this.x += this.size;
  }

  if ((this.y + this.size) >= height) {
    this.y -= this.size;
  }

  if ((this.y - this.size) <= 0) {
    this.y += this.size;
  }
}
EvilCircle.prototype.setControls = function () {
  window.onkeydown = e => {
    switch (e.key) {
      case 'a':
        this.x -= this.velX;
        break;
      case 'd':
        this.x += this.velX;
        break;
      case 'w':
        this.y -= this.velY;
        break;
      case 's':
        this.y += this.velY;
        break;
    }
  };

}
EvilCircle.prototype.collisionDetect = function () {
  for (let j = 0; j < balls.length; j++) {
    if (balls[j].exists) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].exists = false;
      }
    }
  }
}
//实时绘制彩球，当彩球不存在时就不绘制
function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);
  let count = 0;
  devil.draw();
  devil.checkBound();
  devil.collisionDetect();
  for (let i = 0; i < balls.length; i++) {
    if (balls[i].exists) {
      count++;
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
      countText.textContent=`还剩${count}个球`
    }

  }

  requestAnimationFrame(loop);
}


devil.setControls()
while (balls.length < 25) {
  let size = random(10, 20);
  let ball = new Ball(
    // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    true,
    randomColor(),
    size
  );
  balls.push(ball);
}

loop();




