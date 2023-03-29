class Endboss extends MovableObject {
  height = 400;
  width = 250;
  x = 2100;
  y = 50;
  speed = 15;
  speedThroughHit = 50;
  offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };
  hadFirstContact = false;

  images_walking = [
    "img/4_enemie_boss_chicken/1_walk/G1.png",
    "img/4_enemie_boss_chicken/1_walk/G2.png",
    "img/4_enemie_boss_chicken/1_walk/G3.png",
    "img/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  images_alert = [
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

  images_hurt = [
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G22.png",
    "img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  images_dead = [
    "img/4_enemie_boss_chicken/5_dead/G24.png",
    "img/4_enemie_boss_chicken/5_dead/G25.png",
    "img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  constructor() {
    super().loadImage(this.images_alert[0]);
    this.loadImages(this.images_walking);
    this.loadImages(this.images_alert);
    this.loadImages(this.images_dead);
    this.loadImages(this.images_hurt);
    this.animate();
  }

  animate() {
    let i = 0;
    setInterval(() => {
      this.animateEndboss(i);
      i++;
      if (world.character.x > 2000 && !this.hadFirstContact) {
        i = 0;
        this.hadFirstContact = true;
      }
    }, 120);
  }

  animateEndboss(i) {
    if (i < 15) {
      this.playAnimation(this.images_alert);
    } else if (
      !this.isDead() &&
      !this.isHurt() &&
      world.character.x > world.endboss.x - 300
    ) {
      this.playAnimation(this.images_walking);
      this.moveLeft();
    } else if (this.isHurt()) {
      this.playAnimation(this.images_hurt);
      world.endboss.x -= this.speedThroughHit;
    } else if (this.isDead()) {
      this.playAnimation(this.images_dead);
    }
  }
}
