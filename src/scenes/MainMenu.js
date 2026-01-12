class MainMenu extends Phaser.Scene {
	constructor() {
		super('main-menu_scene');
		console.log("MainMenu: constructor");
	}

	init() {
		console.log('MainMenu: init');

		this.hitpoints = 100;
		this.experience = 0;

		console.log(`HP: ${this.hitpoints}\nEXP: ${this.experience}`);
	}

	create() {
		console.log('MainMenu: create');
		
		let player_stats = {
			hitpoints: this.hitpoints,
			experience: this.experience,
		};

		this.scene.start('play_scene', player_stats);
	}
}

