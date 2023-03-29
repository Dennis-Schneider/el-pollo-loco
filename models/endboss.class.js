class Endboss extends MovableObject {
  height = 400;
  width = 250;
  y = 50;
  offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  images_walking = [
    "img/4_enemie_boss_chicken/2_alert/G5.png",
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G7.png",
    "img/4_enemie_boss_chicken/2_alert/G8.png",
    "img/4_enemie_boss_chicken/2_alert/G9.png",
    "img/4_enemie_boss_chicken/2_alert/G10.png",
    "img/4_enemie_boss_chicken/2_alert/G11.png",
    "img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  constructor() {
    super().loadImage(this.images_walking[0]);
    this.loadImages(this.images_walking);
    this.x = 2100;

    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.images_walking);
    }, 200);
  }
}
