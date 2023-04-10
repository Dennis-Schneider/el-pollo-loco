class StatusBarEndboss extends DrawableObject {
  images = [
    "img/7_statusbars/2_statusbar_endboss/health/0.png",
    "img/7_statusbars/2_statusbar_endboss/health/20.png",
    "img/7_statusbars/2_statusbar_endboss/health/40.png",
    "img/7_statusbars/2_statusbar_endboss/health/60.png",
    "img/7_statusbars/2_statusbar_endboss/health/80.png",
    "img/7_statusbars/2_statusbar_endboss/health/100.png",
  ];

  percentage = 100;

  constructor() {
    super();
    this.loadImages(this.images);
    this.x = 600;
    this.y = 15;
    this.width = 200;
    this.height = 34;
    this.setPercentage(100);
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.images[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
