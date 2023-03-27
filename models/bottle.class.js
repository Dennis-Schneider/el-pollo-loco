class Bottle extends MovableObject {
  height = 80;
  width = 80;
  y = 352;
  offset = {
    top: 15,
    bottom: 0,
    left: 50,
    right: 40,
  };
  images_bottle_ground = ["img/6_salsa_bottle/1_salsa_bottle_on_ground.png"];

  constructor() {
    super().loadImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
    this.y + Math.floor() * 500;
    this.x = 500 + Math.random() * 1900;
    this.loadImages(this.images_bottle_ground);
    this.animate();
  }

  /**
   * draw/animate in interval the bottles are laying on ground, when not taken
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.images_bottle_ground);
    }, 400);

    setInterval(() => {
      if (this.collectBottle()) {
        loadImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
      }
    }, 60);
  }
}
