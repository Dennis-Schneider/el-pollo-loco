class MovableObjekt {
  x = 120;
  y = 280;
  img;
  height = 180;
  width = 100;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {
    console.log("Moving right");
  }

  moveLeft() {}
}
