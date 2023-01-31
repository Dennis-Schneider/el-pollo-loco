class MovableObject {
  x = 120;
  y = 155;
  img;
  height = 280;
  width = 150;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {
    console.log("Moving right");
  }

  moveLeft() {}
}
