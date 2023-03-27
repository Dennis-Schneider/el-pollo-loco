class MovableObject extends DrawableObject {
  speed = 0.2;
  speedY = 0;
  acceleration = 2;
  otherDirection = false;
  energy = 100;
  bottle = 0;
  lastHit = 0;
  lastMove = 0;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y <= 150;
    }
  }

  isColliding(mo) {
    return (
      this.x + this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x &&
      this.y < mo.y + mo.height
    );
  }

  // rausgeworfen weil nicht funktioniert Video2|10
  // isColliding(mo) {
  //   return (
  //     this.x + this.width >= mo.x &&
  //     this.x <= mo.x + mo.width &&
  //     this.y + this.offsetY + this.height >= mo.y &&
  //     this.y + this.offsetY <= mo.y + mo.height
  //   );
  // }

  /**
   * when bottle is collectable, add 20 to this.bottle
   */
  collectBottle() {
    if (this.bottle < 100) {
      this.bottle += 20;
    }
  }

  hit() {
    this.energy -= 10;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000; // Difference in seconds
    return timepassed < 0.8;
  }

  isDead() {
    return this.energy == 0;
  }

  getMoveTimeStamp() {
    this.lastMove = new Date().getTime();
  }

  fallInSleep() {
    let timepassed = new Date().getTime() - this.lastMove;
    timepassed = timepassed / 1000;
    return timepassed > 3.0;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  jump() {
    this.speedY = 25;
  }
}
