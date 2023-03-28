class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = new StatusBar();
  bottleBar = new BottleBar();
  coinBar = new CoinBar();
  throwableObjects = [];
  collectedBottle = [];

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkFromWhereColiding();
      this.checkCollectionBottles();
      this.checkCollisions();
      this.checkThrowObject();
    }, 200);
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

  /**
   * check if the enemy hits in front/back or from top
   */
  checkFromWhereColiding() {
    if (this.character.isAboveGround()) {
      this.hitChickenfromTop();
    } else {
      this.checkCollisions();
    }
  }

  /**
   * if hit the enemy from top, the character dont loose energy, so only the chicken does
   */
  hitChickenfromTop() {
    this.level.enemies.forEach((enemies) => {
      if (
        this.character.isColliding(enemies) &&
        this.character.isAboveGround()
      ) {
        if (enemies.energyChicken == 50) {
          // this.chickenHitSound();
          enemies.chickenHit();
          this.character.jumpAfterKill();
        }
      }
    });
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addToMap(this.character);
    this.addObjectsToMap(this.throwableObjects);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottle);
    this.ctx.translate(-this.camera_x, 0); // move canva back
    this.addToMap(this.statusBar);
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
