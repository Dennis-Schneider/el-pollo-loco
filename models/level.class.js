class level {
  enemies;
  clouds;
  coins;
  backgorundObjects;
  level_end_x = 2200;

  constructor(enemies, clouds, coins, backgroundObjects) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
    this.coins = coins;
  }
}
