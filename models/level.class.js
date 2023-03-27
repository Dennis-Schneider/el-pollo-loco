class level {
  enemies;
  clouds;
  coins;
  bottle;
  backgorundObjects;
  level_end_x = 2200;

  constructor(enemies, clouds, coins, bottle, backgroundObjects) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
    this.coins = coins;
    this.bottle = bottle;
  }
}
