class Endboss extends MovableObject {
  height = 400;
  width = 250;
  y = 50;
  speed = 15;
  hadFirstContact = false;
  speedThroughHit = 50;
  offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

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

  images_walking = [
    "img/4_enemie_boss_chicken/1_walk/G1.png",
    "img/4_enemie_boss_chicken/1_walk/G2.png",
    "img/4_enemie_boss_chicken/1_walk/G3.png",
    "img/4_enemie_boss_chicken/1_walk/G4.png",
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

  world;

  constructor() {
    super().loadImage(this.images_alert[0]);
    this.loadImages(this.images_alert);
    this.loadImages(this.images_walking);
    this.loadImages(this.images_hurt);
    this.loadImages(this.images_dead);
    this.firstContactToEndboss();
    this.x = 2000; // position endboss
  }

  firstContactToEndboss() {
    setInterval(() => {
      if (world.level.endboss[0].x < world.character.x + 400) {
        this.hadFirstContact = true;
        this.bossAlert();
      }
      if (this.hadFirstContact) {
        this.animate();
      }
    }, 120);
  }

  animate() {
    setInterval(() => {
      if (this.isDead) {
        this.bossDead();
      } else if (!this.hadFirstContact) {
        this.bossMoveLeft();
      } else if (!this.isDead() && this.isHurtEndboss()) {
        this.bossHurt();
      }
    }, 120);
  }

  /**
   * Starts the animation for the endboss. Endboss is moving left and endboss sound starts.
   */
  bossMoveLeft() {
    // super.moveLeft();
    this.playAnimation(this.images_walking);
    this.otherDirection = false;
  }

  bossAlert() {
    this.playAnimation(this.images_alert);
  }

  bossDead() {
    this.playAnimation(this.images_dead);
  }

  bossHurt() {
    this.playAnimation(this.images_hurt);
  }
}
