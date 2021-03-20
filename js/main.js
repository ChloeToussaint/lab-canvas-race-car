let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  ctx.fillStyle = 'grey'
  ctx.fillRect(0, 0, W, H)
  ctx.fillStyle = 'green'
  ctx.fillRect(70, 0, W - 2 * 70, H)
  ctx.fillStyle = 'white'
  ctx.fillRect(100, 0, 25, H)
  ctx.fillStyle = 'white'
  ctx.fillRect(W - 100 - 25, 0, 25, H)
  ctx.beginPath()
  ctx.lineWidth = 15
  ctx.strokeStyle = 'white'
  ctx.setLineDash([40, 40])
  ctx.moveTo(500, 0)
  ctx.lineTo(500, H)
  ctx.stroke()


  // TODO

  car.draw()





  // TODO

  //
  // Iteration #4: obstacles
  //

  // TODO

  //
  // Iteration #5: collisions
  //

  // TODO

  //
  // Iteration #6: points
  //

  // TODO

}

document.onkeydown = function (e) {
  if (!car) return;

  // TODO




}
document.onkeydown = function (event) {
  console.log('touche appuyee', event)

  switch (event.key) {
    case 'ArrowLeft':
      console.log('gauche')
      car.x += -10;
      car.draw()
      break;
    case 'ArrowRight':
      console.log('droite')
      car.x += +10;
      car.goRight()
      break;
  }
}



let raf;
let frames = 0;
function animLoop() {
  frames++;

  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }

  // TODO
  car = new Car()
  animLoop();
}

document.getElementById("start-button").onclick = function () {
  startGame();
};

// auto-start
startGame();
