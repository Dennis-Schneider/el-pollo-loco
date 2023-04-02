class Cloud extends MovableObject {
  height = 250;
  width = 500;

  constructor(image, x) {
    super().loadImage(image, x);
    this.x = x;
    this.y = Math.random() * 130;
    this.speed = 0.15 + Math.random() * 0.5;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 80);
  }
}
