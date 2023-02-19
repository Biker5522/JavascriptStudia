const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const sliderWidth = document.querySelector("#sliderWidth");

canvas.width = sliderWidth.value;
canvas.height = 900;

ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();

console.log(sliderWidth.value);

var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;

function drawBall(i) {
  ctx.beginPath();
  if (!i) {
    ctx.arc(x, y, 10, 0, Math.PI * 2);
  } else {
    ctx.arc(x, y, 10, 0, Math.PI * 2);
  }
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 1; i < 10; i++) {
    drawBall(i);
  }
  x += dx;
  y += dy;
}

setInterval(draw, 10);
