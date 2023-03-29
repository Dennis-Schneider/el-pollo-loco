class DrawableObject {
  img;
  imageCache = [];
  currentImage = 0;
  x = 120;
  y = 55;
  height = 150;
  width = 100;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof Chicken ||
      this instanceof Coins ||
      this instanceof Bottle ||
      this instanceof Endboss
    ) {
      // outter line
      ctx.beginPath();
      ctx.lineWidth = "2";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
      // inner line
      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.strokeStyle = "red";
      ctx.rect(
        this.x + this.offset.left,
        this.y + this.offset.top,
        this.width - 2 * this.offset.right,
        this.height - (this.offset.bottom + this.offset.top)
      );
      ctx.stroke();
    }
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }
}
