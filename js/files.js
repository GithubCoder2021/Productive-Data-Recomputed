var mult = [1,1,1,1,1,1,1,1];
var stored = [0,0,0,0,0,0,0,0];
var inject = 0.1;

function inject1() {
	stored[0] += game.bits * inject;
	game.bits -= game.bits * inject;
	mult[0] = Math.log10(stored[0])/100+ 1;
	if (mult[0] < 1){
		mult[0] = 1;
	}
}
function inject2() {
	stored[1] += game.bits * inject;
	game.bits -= game.bits * inject;
	mult[1] = Math.log10(stored[1])/100+ 1;
	if (mult[1] < 1){
		mult[1] = 1;
	}
}
function inject3() {
	stored[2] += game.bits * inject;
	game.bits -= game.bits * inject;
	mult[2] = Math.log10(stored[2])/100 + 1;
	if (mult[2] < 1){
		mult[2] = 1;
	}
}
function inject4() {
	stored[3] += game.bits * inject;
	game.bits -= game.bits * inject;
	mult[3] = Math.log10(stored[3])/100+ 1;
	if (mult[3] < 1){
		mult[3] = 1;
	}
}
function inject5() {
	stored[4] += game.bits * inject;
	game.bits -= game.bits * inject;
	mult[4] = Math.log10(stored[4])/100+ 1;
	if (mult[4] < 1){
		mult[4] = 1;
	}
}
function inject6() {
	stored[5] += game.bits * inject;
	game.bits -= game.bits * inject;
	mult[5] = Math.log10(stored[5])/100+ 1;
	if (mult[5] < 1){
		mult[5] = 1;
	}
}
function inject7() {
	stored[6] += game.bits * inject;
	game.bits -= game.bits * inject;
	mult[6] = Math.log10(stored[6])/100+ 1;
	if (mult[6] < 1){
		mult[6] = 1;
	}
}
function inject8() {
	stored[7] += game.bits * inject;
	game.bits -= game.bits * inject;
	mult[7] = Math.log10(stored[7])/100+ 1;
	if (mult[7] < 1){
		mult[7] = 1;
	}
}
setInterval(function(){
	document.getElementById("file1").innerText = mult[0].toFixed(1);
	document.getElementById("file2").innerText = mult[1].toFixed(1);
	document.getElementById("file3").innerText = mult[2].toFixed(1);
	document.getElementById("file4").innerText = mult[3].toFixed(1);
	document.getElementById("file5").innerText = mult[4].toFixed(1);
	document.getElementById("file6").innerText = mult[5].toFixed(1);
	document.getElementById("file7").innerText = mult[6].toFixed(1);
	document.getElementById("file8").innerText = mult[7].toFixed(1);
	document.getElementById("stored1").innerText = stored[0];
	document.getElementById("stored2").innerText = stored[1];
	document.getElementById("stored3").innerText = stored[2];
	document.getElementById("stored4").innerText = stored[3];
	document.getElementById("stored5").innerText = stored[4];
	document.getElementById("stored6").innerText = stored[5];
	document.getElementById("stored7").innerText = stored[6];
	document.getElementById("stored8").innerText = stored[7];
	

},50);
