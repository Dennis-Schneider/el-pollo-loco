class MovableObject {
  x = 120;
  y = 55;
  img;
  height = 280;
  width = 150;
  speed = 0.15;
  speedY = 0;
  acceleration = 2;
  imageCache = [];
  currentImage = 0;
  otherDirection = false;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    return this.y <= 150;
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  playAnimation(images) {
    let i = this.currentImage % this.images_walking.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveRight() {
    this.x += this.speed + 7;
    this.otherDirection = false;
  }

  moveLeft() {
    this.x -= this.speed + 7;
    this.otherDirection = true;
  }

  jump() {
    this.speedY = 25;
  }
}
