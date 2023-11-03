let rules = [
	"scissors beats paper",
	"paper beats rock",
	"rock beats scissors",
];

function check(a, b) {
	for (let rule of rules) {
		if (rule === a + " beats " + b) {
			return "A";
		} else if (rule === b + " beats " + a) {
			return "B";
		}
	}
	
	return "T";
}

let checks = [
	["paper", "scissors", "B"],
	["paper", "rock", "A"],
	["scissors", "paper", "A"],
	["rock", "scissors", "A"],
	["rock", "paper", "B"],
	["rock", "rock", "T"],
	["paper", "paper", "T"],
	["scissors", "scissors", "T"],
];

for (let [a, b, expectedResult] of checks) {
	let actualResult = check(a, b);
	
	console.log(a, b, expectedResult, actualResult);
}
