import Ball from "./Ball.js";
import Canvas from "./Canvas.js";

class Game {
	constructor(canvasEl) {
		this.canvas = new Canvas(canvasEl);
		this.ball = new Ball(this);
		
		this.levelIndex = 0;
		
		this.levels = [
			{
				speed: 10,
				successMessage: "Nice job!",
			},
			{
				speed: 20,
				successMessage: "Nice job!",
			},
			{
				speed: 30,
				successMessage: "Nice job!",
			},
			{
				speed: 40,
				successMessage: "Nice job!",
			},
			{
				speed: 50,
				successMessage: "Nice job!",
			},
		];
	}
	
	get level() {
		if (this.levelIndex >= this.levels.length) {
			return undefined;
		}
		
		let level = this.levels[this.levelIndex];
		
		return {
			...level,
			number: this.levelIndex + 1,
		};
	}
	
	goToNextLevel() {
		this.levelIndex++;
	}
	
	tick() {
		this.ball.tick();
	}
}

export default Game;
