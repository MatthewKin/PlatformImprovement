class EndScene extends Phaser.Scene {
    constructor() {
        super({ key: 'EndScene' });
    }

    init(data) {
        // Optional: get score or reason from previous scene
        this.finalScore = GlobalData.score || 0;
    }

    create() {
        const { width, height } = this.sys.game.canvas;

        // Background color
        this.cameras.main.setBackgroundColor('#000');

        // Text
        this.add.text(width / 2, height / 2 - 100, 'Game Over', {
            fontSize: '48px',
            color: '#ffffff',
        }).setOrigin(0.5);

        this.add.text(width / 2, height / 2 - 40, `Score: ${this.finalScore}`, {
            fontSize: '28px',
            color: '#ffffff',
        }).setOrigin(0.5);

        // Restart Button
        const restartButton = this.add.text(width / 2, height / 2 + 50, 'Restart Game', {
            fontSize: '32px',
            color: '#00ff00',
        }).setOrigin(0.5).setInteractive();

        restartButton.on('pointerdown', () => {
            this.scene.start('platformerScene'); // Replace with your main game scene key
        });
    }
}