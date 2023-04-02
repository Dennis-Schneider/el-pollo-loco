let level1;

function createLevel1(world) {
  return new level(
    [
      new Chicken(world),
      new Chicken(world),
      new Chicken(world),
      new Chicken(world),
      new Chicken(world),
      new Endboss(world),
      new Chicken(world),
      new Chicken(world),
      new Chicken(world),
    ],
    [
      new Cloud(world),
      new Cloud(world),
      new Cloud(world),
      new Cloud(world),
      new Cloud(world),
    ],
    [
      new Coins(world),
      new Coins(world),
      new Coins(world),
      new Coins(world),
      new Coins(world),
    ],
    [
      new Bottle(world),
      new Bottle(world),
      new Bottle(world),
      new Bottle(world),
      new Bottle(world),
      new Bottle(world),
      new Bottle(world),
      new Bottle(world),
    ],
    [
      new BackgroundObject("img/5_background/layers/air.png", -719),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", -719),
      new BackgroundObject(
        "img/5_background/layers/2_second_layer/2.png",
        -719
      ),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", -719),
      new BackgroundObject("img/5_background/layers/air.png", 0),
      new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0),
      new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 0),
      new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 0),
      new BackgroundObject("img/5_background/layers/air.png", 719),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719),
      new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719),
      new BackgroundObject("img/5_background/layers/air.png", 1438),
      new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 1438),
      new BackgroundObject(
        "img/5_background/layers/2_second_layer/1.png",
        1438
      ),
      new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 1438),
      new BackgroundObject("img/5_background/layers/air.png", 2157),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 2157),
      new BackgroundObject(
        "img/5_background/layers/2_second_layer/2.png",
        2157
      ),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 2157),
    ]
  );
}
