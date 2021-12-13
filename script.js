const rulesButton = document.getElementById('rules-btn');
const closeButton = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let score = 0;

const blockRowCount = 9;
const blockColCount = 5;
const delay = 500; //delay to reset the game

// Create ball props
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  speed: 4,
  dx: 4,
  dy: -4,
  visible: true
};

// Create paddle props
const paddle = {
  x: canvas.width / 2 - 40,
  y: canvas.height - 20,
  w: 80,
  h: 10,
  speed: 8,
  dx: 0,
  visible: true
};

// Create block props
const blockInfo = {
  w: 70,
  h: 20,
  padding: 10,
  offsetX: 45,
  offsetY: 60,
  visible: true
};

// Create blocks
const blocks = [];
for (let i = 0; i < blockRowCount; i++) {
  blocks[i] = [];
  for (let j = 0; j < blockColCount; j++) {
    const x = i * (blockInfo.w + blockInfo.padding) + blockInfo.offsetX;
    const y = j * (blockInfo.h + blockInfo.padding) + blockInfo.offsetY;
    blocks[i][j] = { x, y, ...blockInfo };
  }
}

// Draw ball on canvas
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
    ctx.fillStyle = ball.visible ? '#0095dd' : 'transparent';
    ctx.fill();
    ctx.closePath();
  }
  
  // Draw paddle on canvas
  function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
    ctx.fillStyle = paddle.visible ? '#0095dd' : 'transparent';
    ctx.fill();
    ctx.closePath();
  }