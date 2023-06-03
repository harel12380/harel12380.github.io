// setup the fibonacciCanvas
var fibonacciCanvas = document.getElementById('fibonacciCanvas');
var context = fibonacciCanvas.getContext('2d');

// fibonacciCanvas.style.scale = 1;

// setInterval(function () {
//   fibonacciCanvas.style.scale *= 0.99;
// }, 100)

function updateCanvasSize() {
  fibonacciCanvas.width = window.innerWidth;
  fibonacciCanvas.height = window.innerHeight;
  x = fibonacciCanvas.width / 2;
  y = fibonacciCanvas.height / 2;
}

window.addEventListener('resize', updateCanvasSize);
window.addEventListener('orientationchange', updateCanvasSize);
window.addEventListener('fullscreenchange', updateCanvasSize);
window.addEventListener('fullscreenerror', updateCanvasSize);

var scaler = 5;
var fibSequence;
var x;
var y;
var horizontalRight;
var verticalUp;
var toggleVertical;
var startAngle;
var animationRequestId;
var animationSpeed = 200; // Delay in milliseconds between each Fibonacci spiral drawing

function nextFibonacci() {
  var lastIndex = fibSequence.length;
  var newFibonacci = fibSequence[lastIndex - 1] + fibSequence[lastIndex - 2];

  fibSequence.push(newFibonacci);
  fibSequence.shift();

  return newFibonacci;
}

function drawFibonacci() {
  context.lineWidth = 1;

  var currFibonacci = nextFibonacci();
  var radius = currFibonacci * scaler;

  toggleVertical = !toggleVertical;

  var newX = x;
  var newY = y;

  if (toggleVertical) {
    if (horizontalRight) {
      // 2
      newX -= radius;
      newY += radius;
    } else {
      // 4
      newX += radius;
      newY -= radius;
    }
  } else {
    if (horizontalRight) {
      // 3
      newX += radius;
      newY += radius;
    } else {
      // 1
      newX -= radius;
      newY -= radius;
    }
  }

  var xToDraw = newX;
  var yToDraw = newY;

  if (toggleVertical) {
    xToDraw += horizontalRight ? radius : -radius;
  } else {
    yToDraw += horizontalRight ? -radius : radius;
  }

  var endAngle = startAngle + 90;

  context.beginPath();
  context.strokeStyle = '#fff';
  context.arc(
    xToDraw,
    yToDraw,
    radius,
    (startAngle * Math.PI) / 180,
    (endAngle * Math.PI) / 180,
    false
  );
  context.stroke();

  x = newX;
  y = newY;

  // Toggle sizes
  if (toggleVertical) {
    verticalUp = !verticalUp;
  } else {
    horizontalRight = !horizontalRight;
  }

  startAngle -= 90;

  // Check if the spiral hits the edge of the screen
  if (
    x <= 0 ||
    x >= fibonacciCanvas.width ||
    y <= 0 ||
    y >= fibonacciCanvas.height
  ) {
    cancelAnimationFrame(animationRequestId);
    console.log('cancel');
  } else {
    animationRequestId = setTimeout(function () {
      drawFibonacci();
    }, animationSpeed);
  }
}

function restartFibonacci() {
  fibSequence = [1, 1];
  horizontalRight = true;
  verticalUp = true;
  toggleVertical = true;
  startAngle = 90;
  clearTimeout(animationRequestId);
  animationRequestId = setTimeout(function () {
    drawFibonacci();
  }, animationSpeed);

  updateCanvasSize();
}

restartFibonacci();
