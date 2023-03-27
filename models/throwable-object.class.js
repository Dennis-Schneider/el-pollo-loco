class ThrowableObject extends MovableObject {
  constructor(x, y) {
    super().loadImage("img/6_salsa_bottle/salsa_bottle.png");
    this.x = x;
    this.y = y;
    this.height = 100;
    this.width = 80;
    this.trow(100, 150);
  }

  trow() {
    this.speedY = 25;
    this.applyGravity();
    setInterval(() => {
      this.x += 8;
    }, 25);
  }
}
