class MovableObject extends DrawableObject {
  speed = 0.2;
  speedY = 0;
  acceleration = 2;
  otherDirection = false;
  energy = 100;
  bottle = 0;
  coins = 0;
  lastHit = 0;
  energyChicken = 50;
  lastMove = 0;
  splash = false;
  offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

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

  /**
   * check if the moveable objects are colliding each other
   * @param {object} mo moveable object
   * @returns parameter from with, height & offsets
   */
  isColliding(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  }

  /**
   * when coin is collectable, add 20 to this.coin
   */
  collectCoins() {
    if (this.coins < 100) {
      this.coins += 20;
    }
  }

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

  /**
   * when the enemies are hitet, subtract 50
   */
  chickenHit() {
    this.energyChicken -= 50;
    if (this.energyChicken <= 0) {
      this.energyChicken = 0;
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

  /**
   * the the height of the jump after kill
   */
  jumpAfterKill() {
    this.speedY = 15;
  }
}
