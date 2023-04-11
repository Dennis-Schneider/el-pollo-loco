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
    this.x = 20;
    this.y = 45;
    this.width = 200;
    this.height = 54;
    this.setPercentage(0);
  }

  /**
   * The function sets the percentage of a bottle and updates the image accordingly.
   * @param percentage - The percentage parameter is a number that represents the percentage of the
   * bottle that should be filled. This method is likely part of a larger program that simulates filling
   * a bottle with liquid, and this parameter is used to update the image of the bottle to reflect the
   * current fill level.
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.images_bottle[this.resolveImgIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * The function returns an index value based on the percentage value.
   * @returns The function `resolveImgIndex()` returns a number between 0 and 5 based on the value of the
   * `percentage` property. The returned number represents an index that can be used to select an image
   * to display.
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
