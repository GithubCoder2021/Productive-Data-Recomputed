var mult = [1,1,1,1,1,1,1,1];
var stored = [0,0,0,0,0,0,0,0];
var inject = 0.1;


function inject1() {
	stored[0] += game.bits * inject;
	game.bits -= game.bits * inject;
	mult[0] = Math.log10(stored[0])/5+ 1;
	if (mult[0] < 1){
		mult[0] = 1;
	}
}
function inject2() {
	stored[1] += game.bits * inject;
	game.bits -= game.bits * inject;
	mult[1] = Math.log10(stored[1])/5+ 1;
	if (mult[1] < 1){
		mult[1] = 1;
	}
}
function inject3() {
	stored[2] += game.bits * inject;
	game.bits -= game.bits * inject;
	mult[2] = Math.log10(stored[2])/5 + 1;
	if (mult[2] < 1){
		mult[2] = 1;
	}
}
function inject4() {
	stored[3] += game.bits * inject;
	game.bits -= game.bits * inject;
	mult[3] = Math.log10(stored[3])/5+ 1;
	if (mult[3] < 1){
		mult[3] = 1;
	}
}
function inject5() {
	stored[4] += game.bits * inject;
	game.bits -= game.bits * inject;
	mult[4] = Math.log10(stored[4])/5+ 1;
	if (mult[4] < 1){
		mult[4] = 1;
	}
}
function inject6() {
	stored[5] += game.bits * inject;
	game.bits -= game.bits * inject;
	mult[5] = Math.log10(stored[5])/5+ 1;
	if (mult[5] < 1){
		mult[5] = 1;
	}
}
function inject7() {
	stored[6] += game.bits * inject;
	game.bits -= game.bits * inject;
	mult[6] = Math.log10(stored[6])/5+ 1;
	if (mult[6] < 1){
		mult[6] = 1;
	}
}
function inject8() {
	stored[7] += game.bits * inject;
	game.bits -= game.bits * inject;
	mult[7] = Math.log1p(stored[7])/5+ 1;
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
	document.getElementById("stored1").innerText = Math.floor(stored[0]);
	document.getElementById("stored2").innerText = Math.floor(stored[1]);
	document.getElementById("stored3").innerText = Math.floor(stored[2]);
	document.getElementById("stored4").innerText = Math.floor(stored[3]);
	document.getElementById("stored5").innerText = Math.floor(stored[4]);
	document.getElementById("stored6").innerText = Math.floor(stored[5]);
	document.getElementById("stored7").innerText = Math.floor(stored[6]);
	document.getElementById("stored8").innerText = Math.floor(stored[7]);
	document.getElementById("injectAmt").innerText = Math.floor(inject*100);
	document.getElementById("fileMult").innerText = (mult[0]*mult[1]*mult[2]*mult[3]*mult[4]*mult[5]*mult[6]*mult[7]).toFixed(1);

},50);

function setInject(amount){
	inject = amount;
}

function fileSave(){
	var saveFiles ={
		mult: [mult[0],mult[1],mult[2],mult[3],mult[4],mult[5],mult[6],mult[7]],
		stored: [stored[0],stored[1],stored[2],stored[3],stored[4],stored[5],stored[6],stored[7]]
	};
	localStorage.setItem("files",JSON.stringify(saveFiles));
	
}
function loadFiles(){
	var fileLoad = JSON.parse(localStorage.getItem("files"));
	if (typeof fileLoad.mult[0] !== "undefined") mult[0] = fileLoad.mult[0];
	if (typeof fileLoad.mult[1] !== "undefined") mult[1] = fileLoad.mult[1];
	if (typeof fileLoad.mult[2] !== "undefined") mult[2] = fileLoad.mult[2];
	if (typeof fileLoad.mult[3] !== "undefined") mult[3] = fileLoad.mult[3];
	if (typeof fileLoad.mult[4] !== "undefined") mult[4] = fileLoad.mult[4];
	if (typeof fileLoad.mult[5] !== "undefined") mult[5] = fileLoad.mult[5];
	if (typeof fileLoad.mult[6] !== "undefined") mult[6] = fileLoad.mult[6];
	if (typeof fileLoad.mult[7] !== "undefined") mult[7] = fileLoad.mult[7];
	if (typeof fileLoad.stored[0] !== "undefined") stored[0] = fileLoad.stored[0];
	if (typeof fileLoad.stored[1] !== "undefined") stored[1] = fileLoad.stored[1];
	if (typeof fileLoad.stored[2] !== "undefined") stored[2] = fileLoad.stored[2];
	if (typeof fileLoad.stored[3] !== "undefined") stored[3] = fileLoad.stored[3];
	if (typeof fileLoad.stored[4] !== "undefined") stored[4] = fileLoad.stored[4];
	if (typeof fileLoad.stored[5] !== "undefined") stored[5] = fileLoad.stored[5];
	if (typeof fileLoad.stored[6] !== "undefined") stored[6] = fileLoad.stored[6];
	if (typeof fileLoad.stored[7] !== "undefined") stored[7] = fileLoad.stored[7];
}

loadFiles();
