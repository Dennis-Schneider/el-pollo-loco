class ThrowableObject extends MovableObject {
  offset = {
    top: 10,
    bottom: 0,
    left: 10,
    right: 10,
  };
  splashInterval = [];

  image_bottle_rotation = [
    "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  image_bottle_splash = [
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];

  constructor(x, y) {
    super().loadImage(
      "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"
    );
    this.loadImages(this.image_bottle_rotation);
    this.loadImages(this.image_bottle_splash);
    this.x = x;
    this.y = y;
    this.height = 100;
    this.width = 80;
    this.animate();
  }

  animate() {
    this.throw();
    this.splashBottle();
  }

  throw() {
    this.speedY = 20;
    if (world.character.otherDirection == false) {
      this.x = world.character.x + 65;
      setInterval(() => {
        this.x += 4.5;
      }, 20);
    } else {
      this.x = world.character.x - 30;
      setInterval(() => {
        this.x -= 2.5;
      }, 20);
    }
    this.applyGravity();
  }

  splashBottle() {
    this.splashInterval = setInterval(() => {
      if (this.y >= 320) {
        this.playAnimation(this.image_bottle_splash);
        // this.soundSplash();
      } else if (world.character.splash == true) {
        this.playAnimation(this.image_bottle_splash);
        // this.soundSplash();
        setTimeout(() => {
          clearInterval(this.splashinterval);
        }, 60);
      } else if (this.y <= 360) {
        this.playAnimation(this.image_bottle_rotation);
      }
    }, 60);
  }
}
