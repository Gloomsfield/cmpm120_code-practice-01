class Play extends Phaser.Scene {
	constructor() {
		super('play_scene');
		console.log('Play: constructor');
	}

	init(player_stats) {
		console.log('Play: init');

		this.hitpoints = player_stats.hitpoints;
		this.experience = player_stats.experience;
	}

	create() {
		console.log('Play: create');

		console.log(`HP: ${this.hitpoints}`);
	}
}
