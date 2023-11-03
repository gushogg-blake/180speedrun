import Evented from "./utils/Evented.js";
import pad from "./utils/pad.js";

class Canvas extends Evented {
	constructor(el) {
		super();
		
		this.backgroundColor = "#ffffff";
		this.width = 300;
		this.height = 450;
		this._el = el;
		
		this._el.addEventListener("click", (e) => {
			let ctx = this._el.getContext("2d");
			let x = e.offsetX;
			let y = e.offsetY;
			
			let {data} = ctx.getImageData(x, y, 1, 1);
			let [r, g, b] = data;
			
			let hexDigits = [r, g, b].map(n => n.toString(16)).map(pad);
			let color = "#" + hexDigits.join("");
			
			this.fire("click", color);
		});
	}
}

export default Canvas;
