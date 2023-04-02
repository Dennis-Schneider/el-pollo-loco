class World {
  character = new Character();
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = new StatusBar();
  statusBarEndboss = new StatusBarEndboss();
  bottleBar = new BottleBar();
  coinBar = new CoinBar();
  throwableObjects = [];
  collectedBottle = [];
  collectedCoins = [];

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.level = createLevel1(this);
    this.setWorld();
    this.draw();
    this.checkCollisions();
    this.checkBottlesHitEndboss();
    this.checkThrowObjects();
  }

  setWorld() {
    this.character.world = this;
  }

  checkCollisions() {
    setInterval(() => {
      this.checkCollision();
      this.checkFromWhereColiding();
      this.checkCollectionBottles();
      this.checkCollectionCoins();
      this.coinIsCollected();
    }, 1000 / 65);
  }

  checkBottlesHitEndboss() {
    setInterval(() => {
      this.checkBottleHitEndboss();
    }, 1000 / 5);
  }

  checkThrowObjects() {
    setInterval(() => {
      this.checkThrowObject();
    }, 1000 / 5);
    // evtl timeout einfügen?
  }

  checkCollectionBottles() {
    this.level.bottle.forEach((bottle) => {
      if (this.character.isColliding(bottle)) {
        this.bottleIsCollected();
        this.character.collectBottle();
        this.collectedBottle = this.collectedBottle.splice(0, 4);
        this.collectedBottle.push(bottle);
        this.bottleBar.setPercentage(this.character.bottle);
      }
    });
    if (this.bottleBar.percentage == 100) {
    }
  }

  bottleIsCollected() {
    if (this.collectedBottle.length < 5) {
      for (let i = 0; i < this.level.bottle.length; i++) {
        const bottle = this.level.bottle[i];
        if (this.character.isColliding(bottle)) {
          // this.bottleCollectSound();
          this.level.bottle.splice(i, 1);
        }
      }
    }
  }

  /**
   * check if pepe collected the coin and play the coinCollectSound
   */
  checkCollectionCoins() {
    this.level.coins.forEach((coins) => {
      if (this.character.isColliding(coins)) {
        this.character.collectCoins();
        // this.collectedCoins.push(coins);

        // this.coinCollectSound();
        this.coinBar.setPercentage(this.character.coins);
      }
    });
  }

  /**
   *  collect the Coin an move it off screen
   */
  coinIsCollected() {
    for (let i = 0; i < this.level.coins.length; i++) {
      const coin = this.level.coins[i];
      if (this.character.isColliding(coin)) {
        this.level.coins.splice(i, 1);
      }
    }
  }

  checkThrowObject() {
    if (this.keyboard.D && this.collectedBottle.length > 0) {
      let collectedBottle = new ThrowableObject(
        this.character.x + 100,
        this.character.y + 100
      );
      this.character.bottle -= 20;
      this.bottleBar.setPercentage(this.character.bottle);
      this.throwableObjects = this.throwableObjects.splice(0, 1);
      this.throwableObjects.push(collectedBottle);
      this.collectedBottle.splice(0, 1);
    }
  }

  checkBottleHitEndboss() {
    this.throwableObjects.forEach((bottle) => {
      this.level.endboss.forEach((endboss) => {
        if (bottle.isColliding(endboss)) {
          endboss.hitEndboss();
          this.statusBarEndboss.setPercentage(endboss.energy);
          // bottle_smash.play();
          // chicken_dead_sound.play();
          setTimeout(() => {
            this.eraseThrowingBottle(bottle);
          }, 180);
        }
      });
    });
  }

  eraseThrowingBottle(bottle) {
    let i = this.throwableObjects.indexOf(bottle);
    this.throwableObjects.splice(i, 1);
  }

  checkFromWhereColiding() {
    if (this.character.isAboveGround()) {
      this.hitChickenfromTop();
    } else {
      this.checkCollision();
    }
  }

  hitChickenfromTop() {
    this.level.enemies.forEach((enemies) => {
      if (
        this.character.isColliding(enemies) && // pepe is colliding AND...
        this.character.isAboveGround() // ...above ground - also springend!
      ) {
        if (enemies.energy == 50) {
          enemies.chickenHit();
          this.character.jumpAfterKill();
        }
      }
    });
  }

  checkCollision() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy) && !this.character.isHurt()) {
        if (this.character.isAboveGround()) {
          this.hitChickenfromTop();
        } else {
          this.character.hit();
          this.statusBar.setPercentage(this.character.energy);
        }
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.endboss);
    this.addToMap(this.character);
    this.addObjectsToMap(this.throwableObjects);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottle);
    this.ctx.translate(-this.camera_x, 0); // move canva back
    this.addToMap(this.statusBar);
    this.addToMap(this.statusBarEndboss);
    this.addToMap(this.bottleBar);
    this.addToMap(this.coinBar);
    this.ctx.translate(this.camera_x, 0); // move canva forwards
    this.ctx.translate(-this.camera_x, 0);
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
