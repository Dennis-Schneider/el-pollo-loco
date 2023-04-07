let canvas;
let ctx;
let world;
let keyboard = new Keyboard();

function init() {}

function startGame() {
  display("loading-screen");
  setTimeout(() => {
    level1 = createLevel1(world);
    initWorld();
  }, 2500);
  setTimeout(() => {
    hide("start-screen");
    hide("loading-screen");
  }, 3000);
}

function initWorld() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

function toggleVisibility(id) {
  let element = document.getElementById(id);
  if (element.classList.contains("d-none")) {
    element.classList.remove("d-none");
  } else {
    element.classList.add("d-none");
  }
}

function hide(id) {
  document.getElementById(id).classList.add("d-none");
}

function display(id) {
  document.getElementById(id).classList.remove("d-none");
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
