class CoinBar extends DrawableObject {
  images_coins = [
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png",
  ];

  percentage = 100;

  constructor() {
    super().loadImage(
      "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png"
    );
    this.loadImages(this.images_coins);
    this.x = 20;
    this.y = 90;
    this.width = 200;
    this.height = 54;
    this.setPercentage(0);
  }

  /**
   * The function sets the percentage value and updates the image displayed based on the new percentage.
   * @param percentage - The percentage parameter is a number that represents the percentage of
   * completion or progress of a task or process. It is used to update the image displayed by the code
   * based on the current percentage value.
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.images_coins[this.resolveImgIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * This function returns an index value based on the percentage value provided.
   * @returns The function `resolveImgIndex()` returns a number between 0 and 5 based on the value of
   * the `percentage` property of the object calling the function. If the `percentage` is 100, it
   * returns 5. If the `percentage` is between 80 and 99, it returns 4. If the `percentage` is between
   * 60 and 79, it returns
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
