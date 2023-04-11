class DrawableObject {
  img;
  imageCache = [];
  currentImage = 0;
  x = 120;
  y = 55;
  height = 150;
  width = 100;

  /**
   * The function loads an image from a specified path.
   * @param path - The path parameter is a string that represents the URL or file path of the image that
   * needs to be loaded.
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * This function draws an image on a canvas context with specified coordinates and dimensions.
   * @param ctx - ctx stands for "context" and refers to the 2D rendering context of a canvas element. It
   * is used to draw and manipulate graphics on the canvas.
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /**
   * The function loads images from an array and caches them using their file paths as keys.
   * @param arr - an array of image file paths that need to be loaded into the image cache.
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }
}
