class Cloud extends MovableObject {
  y = 20;
  height = 250;
  width = 500;

  constructor() {
    super().loadImage("img/5_background/layers/4_clouds/1.png");
    this.y = Math.random() * 130;
    this.x = 100 + Math.random() * 2500;
    this.animate();
  }
  animate() {
    this.moveLeft();
  }
}
