var mult = [1,1,1,1,1,1,1,1];
var stored = [0,0,0,0,0,0,0,0];
var inject = 0.1;

function inject(id) {
	stored[id] += game.bits * inject;
	game.bits -= game.bits * inject
	
}
