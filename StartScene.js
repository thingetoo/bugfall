class StartScene extends Phaser.Scene {
	constructor() {
		super({ key: 'StartScene' })
	}

	create() {
    this.add.text( 80, 100, 'Shoot all the bugs down!', {fill: '#FFFFFF', fontSize: '20px'})
    this.add.text( 62, 275, 'Use the left and right keys to move', {fill: '#000000', fontSize: '15px'})
    this.add.text( 72, 300, 'Shoot repellent with the spacebar', {fill: '#000000', fontSize: '15px'})
    this.add.text( 130, 375, 'Click to start', {fill: '#FFFFFF', fontSize: '20px'})
		this.input.on('pointerdown', () => {
			this.scene.stop('StartScene')
			this.scene.start('GameScene')
		})
	}
}