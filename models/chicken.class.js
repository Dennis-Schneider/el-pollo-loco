class Chicken extends MovableObject {
  height = 70;
  width = 80;
  y = 360;

  images_walking = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.x = 200 + Math.random() * 500; // = Zahl zwischen 200 und 500
    this.loadImages(this.images_walking);
    this.speed = 0.15 + Math.random() * 1;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.images_walking);
    }, 200);
  }
}
