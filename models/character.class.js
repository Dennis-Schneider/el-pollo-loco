class Character extends MovableObject {
  images_walking = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png",
  ];
  currentImage = 0;
  constructor() {
    super().loadImage("img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.images_walking);

    this.animate();
  }

  animate() {
    setInterval(() => {
      let path = this.images_walking[this.currentImage];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 1000);
  }

  jump() {}
}
