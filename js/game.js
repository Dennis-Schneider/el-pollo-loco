let canvas;
let ctx;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  level1 = createLevel1(world);
  console.log("My Character is", world.character);
}

window.addEventListener("keydown", (event) => {
  if (event.key == "ArrowRight" || event.key == "d") {
    keyboard.RIGHT = true;
  }
  if (event.key == "ArrowLeft" || event.key == "a") {
    keyboard.LEFT = true;
  }
  if (event.key == "ArrowUp" || event.key == "w" || event.key == " ") {
    keyboard.UP = true;
  }
  if (event.key == "e") {
    keyboard.D = true;
  }
});

window.addEventListener("keyup", (event) => {
  if (event.key == "ArrowRight" || event.key == "d") {
    keyboard.RIGHT = false;
  }
  if (event.key == "ArrowLeft" || event.key == "a") {
    keyboard.LEFT = false;
  }
  if (event.key == "ArrowUp" || event.key == "w" || event.key == " ") {
    keyboard.UP = false;
  }
  if (event.key == "e") {
    keyboard.D = false;
  }
});
