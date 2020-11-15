const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 500,
  scale: {
  mode: Phaser.Scale.FIT,
  autoCenter: Phaser.Scale.CENTER_BOTH
},
  backgroundColor: "#042f66",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
      enableBody: true,
    }
  },
  scene: [StartScene, GameScene]
};

const game = new Phaser.Game(config);
