import Evented from "./utils/Evented.js";

class Ball extends Evented {
	constructor(game) {
		super();
		
		this.game = game;
		this.color = "#4eb1b1";
		this.defaultX = 50;
		this.x = this.defaultX;
		this.y = 0;
		this.defaultWidth = 100;
		this.width = this.defaultWidth;
		this.height = 100;
		
		this.a = 10;
		this.velocity = 10;
		
		this.game.canvas.on("click", (color) => {
			if (color === this.color) {
				this.fire("click");
			}
		});
	}
	
	tick() {
		let bottom = this.game.canvas.height - this.height;
		let bounceThreshold = bottom - 100;
		let diff = Math.max(0, this.y - bounceThreshold) / 3;
		
		this.width = this.defaultWidth + diff;
		this.x = this.defaultX - diff / 2;
		
		this.y += this.velocity;
		this.velocity += this.a;
		
		//let {heightAngle, width, height, x, y} = this;
		//
		//console.log(heightAngle, width, height, x, y);
		
		if (this.y <= 0) {
			this.y = 0;
			this.velocity = this.a;
		}
		
		if (this.y >= bottom) {
			this.y = bottom;
			this.velocity = -this.velocity;
		}
	}
}

export default Ball;
