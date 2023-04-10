class Keyboard {
  LEFT = false;
  RIGHT = false;
  UP = false;
  DOWN = false;
  SPACE = false;
  D = false;

  constructor() {
    this.eventKeyboardBtns();
    this.eventTouchpadBtns();
  }

  eventKeyboardBtns() {
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
  }

  eventTouchpadBtns() {
    setTimeout(() => {
      document
        .getElementById("control-left")
        .addEventListener("touchstart", (event) => {
          event.preventDefault();
          this.LEFT = true;
        });

      document
        .getElementById("control-left")
        .addEventListener("touchend", (event) => {
          event.preventDefault();
          this.LEFT = false;
        });

      document
        .getElementById("control-right")
        .addEventListener("touchstart", (event) => {
          event.preventDefault();
          this.RIGHT = true;
        });

      document
        .getElementById("control-right")
        .addEventListener("touchend", (event) => {
          event.preventDefault();
          this.RIGHT = false;
        });

      document
        .getElementById("control-jump")
        .addEventListener("touchstart", (event) => {
          event.preventDefault();
          this.UP = true;
        });

      document
        .getElementById("control-jump")
        .addEventListener("touchend", (event) => {
          event.preventDefault();
          this.UP = false;
        });

      document
        .getElementById("control-throw")
        .addEventListener("touchstart", (event) => {
          event.preventDefault();
          this.D = true;
        });

      document
        .getElementById("control-throw")
        .addEventListener("touchend", (event) => {
          event.preventDefault();
          this.D = false;
        });
    }, 500);
  }
}
