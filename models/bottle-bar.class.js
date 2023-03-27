class BottleBar extends DrawableObject {
  images_bottle = [
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png",
  ];

  percentage;

  constructor() {
    super().loadImage(
      "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png"
    );
    this.loadImages(this.images_bottle);
    this.x = 250;
    this.y = 4;
    this.width = 200;
    this.height = 54;
    this.setPercentage(0);
  }

  /**
   * set the percentage and resolves the img with the index
   * @param {number} percentage
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.images_bottle[this.resolveImgIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * returns the number to get the percentage for the bottlebar
   * @returns {number}
   */
  resolveImgIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage >= 80) {
      return 4;
    } else if (this.percentage >= 60) {
      return 3;
    } else if (this.percentage >= 40) {
      return 2;
    } else if (this.percentage >= 20) {
      return 1;
    } else {
      return 0;
    }
  }
}