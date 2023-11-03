class Evented {
	constructor() {
		this.handlers = {};
	}
	
	on(event, handler) {
		if (!this.handlers[event]) {
			this.handlers[event] = [];
		}
		
		this.handlers[event].push(handler);
		
		return () => {
			if (!this.handlers[event]) {
				return;
			}
			
			this.handlers[event] = this.handlers[event].filter(h => h !== handler);
			
			if (this.handlers[event].length === 0) {
				delete this.handlers[event];
			}
		};
	}
	
	fire(event, args) {
		if (!this.handlers[event]) {
			return;
		}
		
		for (let handler of this.handlers[event]) {
			handler(args);
		}
	}
}

export default Evented;
