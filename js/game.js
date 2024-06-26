var game = {
  bits: 0,
  bytes: 0,
  bitMax: 32,
  bps: 1,
  byps: 0.5,
  produceBit: false,
  produceByte: false,
  upgLevels: [0,0,0],
  upgEffects: [1,1,1],
  upgCosts: [2,2,8],
  time: 0
};

var req ={
	files: false,
	computers: false
};

setInterval (function() {
if (game.produceBit == true){
  game.bits += (game.bps/20)*mult[0]*mult[1]*mult[2]*mult[3]*mult[4]*mult[5]*mult[6]*mult[7];
}
if (game.produceByte == true){
  if (game.bits > 0){
  game.bits -= ((game.byps*8)/20)*mult[0]*mult[1]*mult[2]*mult[3]*mult[4]*mult[5]*mult[6]*mult[7];
  game.bytes += (game.byps/20)*mult[0]*mult[1]*mult[2]*mult[3]*mult[4]*mult[5]*mult[6]*mult[7];
 }else {
  game.produceByte = false;
document.getElementById("bytes").innerText = "Produce";
 }
}
if (game.bits < 0){
  game.bits = 0;
}
if (game.bits >= game.bitMax){
  game.bits = game.bitMax;
  game.produceBit = false;
document.getElementById("bits").innerText = "Produce";
}
document.getElementById("bit").innerText = Math.floor(game.bits) + "/" + Math.floor(game.bitMax);
document.getElementById("byte").innerText = Math.floor(game.bytes);
document.getElementById("bps").innerText = game.bps.toFixed(1);
document.getElementById("byps").innerText = game.byps.toFixed(1);
document.getElementById("upg1").innerText = Math.floor(game.upgCosts[0]);
document.getElementById("upg2").innerText = Math.floor(game.upgCosts[1]);
document.getElementById("upg3").innerText = Math.floor(game.upgCosts[2]);
document.getElementById("level1").innerText =game.upgLevels[0];
document.getElementById("level2").innerText = game.upgLevels[1];
document.getElementById("level3").innerText = game.upgLevels[2];
document.getElementById("effect1").innerText =game.upgEffects[0].toFixed(1);
document.getElementById("effect2").innerText = game.upgEffects[1].toFixed(1);
document.getElementById("effect3").innerText = game.upgEffects[2].toFixed(1);
if (game.bytes >= 24 || req.files == false){
document.getElementById("fileReqFalse").style.display = "none";
document.getElementById("fileReqTrue").style.display = "inline-block";
}else{
document.getElementById("fileReqFalse").style.display = "inline-block";
document.getElementById("fileReqTrue").style.display = "none";
}
updateAch();

},50);

function produceBits(){
 if (game.produceBit == false){
   game.produceBit = true;
   game.produceByte = false;
document.getElementById("bits").innerText = "Producing";
document.getElementById("bytes").innerText = "Produce";
 } else {
   game.produceBit = false;
document.getElementById("bits").innerText = "Produce";
 }
}

function produceBytes(){
 if (game.produceByte == false){
   game.produceByte = true;
   game.produceBit = false;
document.getElementById("bytes").innerText = "Producing";
document.getElementById("bits").innerText = "Produce";
 } else {
   game.produceByte = false;
document.getElementById("bytes").innerText = "Produce";
 }
}

function buyUpg1(){
	if (game.bytes >= game.upgCosts[0]){
	   game.bytes -= game.upgCosts[0];
		game.bps *= 1.5;
		game.upgCosts[0] *= 2;
    game.upgEffects[0] *=1.5;
    game.upgLevels[0]++;
		
	}
}

function buyUpg2(){
	if (game.bytes >= game.upgCosts[1]){
	   game.bytes -= game.upgCosts[1];
		game.bitMax *= 1.5;
		game.upgCosts[1] *= 1.5;
    game.upgEffects[1] *=1.5;
    game.upgLevels[1]++;
		
	}
}

function buyUpg3(){
	if (game.bytes >= game.upgCosts[2]){
	   game.bytes -= game.upgCosts[2];
		game.byps *= 1.5;
		game.upgCosts[2] *= 2;
    game.upgEffects[2] *=1.5;
    game.upgLevels[2]++;
		
	}
}


function loadGame(){
var savegame = JSON.parse(localStorage.getItem("data"));
if (savegame !== null) {
  game = savegame;
}

if (typeof savegame.bits !== "undefined") game.bits = savegame.bits;

if (typeof savegame.bytes !== "undefined") game.bytes = savegame.bytes;

if (typeof savegame.bps !== "undefined") game.bps = savegame.bps;

if (typeof savegame.byps !== "undefined") game.byps = savegame.byps;

if (typeof savegame.bitMax !== "undefined") game.bitMax = savegame.bitMax;
if (typeof savegame.upgLevels[0] !== "undefined") game.upgLevels[0] = savegame.upgLevels[0];
if (typeof savegame.upgLevels[1] !== "undefined") game.upgLevels[1] = savegame.upgLevels[1];
if (typeof savegame.upgLevels[2] !== "undefined") game.upgLevels[2] = savegame.upgLevels[2];
if (typeof savegame.upgEffects[0] !== "undefined") game.upgEffects[0] = savegame.upgEffects[0];
if (typeof savegame.upgEffects[1] !== "undefined") game.upgEffects[1] = savegame.upgEffects[1];
if (typeof savegame.upgEffects[2] !== "undefined") game.upgEffects[2] = savegame.upgEffects[2];
if (typeof savegame.upgCosts[0] !== "undefined") game.upgCosts[0] = savegame.upgCosts[0];
if (typeof savegame.upgCosts[1] !== "undefined") game.upgCosts[1] = savegame.upgCosts[1];
if (typeof savegame.upgCosts[2] !== "undefined") game.upgCosts[2] = savegame.upgCosts[2];
game.produceBit = false;
game.produceByte = false;

if (typeof savegame.time !== "undefined") game.time = savegame.time;
}


function save() { 
  localStorage.setItem("data", JSON.stringify(game));
}
	
var game = {
  bits: 0,
  bytes: 0,
  bitMax: 32,
  bps: 1,
  byps: 0.5,
  produceBit: false,
  produceByte: false,
  upgLevels: [0,0,0],
  upgEffects: [1,1,1],
  upgCosts: [2,2,8],
  time: 0,
  fileReq: false
};


setInterval (function() {
if (game.produceBit == true){
  game.bits += (game.bps/40);
}
if (game.produceByte == true){
  if (game.bits > 0){
  game.bits -= ((game.byps*8)/20)*mult[0]*mult[1]*mult[2]*mult[3]*mult[4]*mult[5]*mult[6]*mult[7];
  game.bytes += (game.byps/20)*mult[0]*mult[1]*mult[2]*mult[3]*mult[4]*mult[5]*mult[6]*mult[7];
 }else {
  game.produceByte = false;
document.getElementById("bytes").innerText = "Produce";
 }
}
if (game.bits < 0){
  game.bits = 0;
}
if (game.bits >= game.bitMax){
  game.bits = game.bitMax;
  game.produceBit = false;
document.getElementById("bits").innerText = "Produce";
}
document.getElementById("bit").innerText = Math.floor(game.bits) + "/" + Math.floor(game.bitMax);
document.getElementById("byte").innerText = Math.floor(game.bytes);
document.getElementById("bps").innerText = ((game.bps)*mult[0]*mult[1]*mult[2]*mult[3]*mult[4]*mult[5]*mult[6]*mult[7]).toFixed(1);
document.getElementById("byps").innerText = ((game.byps)*mult[0]*mult[1]*mult[2]*mult[3]*mult[4]*mult[5]*mult[6]*mult[7]).toFixed(1);
document.getElementById("upg1").innerText = Math.floor(game.upgCosts[0]);
document.getElementById("upg2").innerText = Math.floor(game.upgCosts[1]);
document.getElementById("upg3").innerText = Math.floor(game.upgCosts[2]);
document.getElementById("level1").innerText =game.upgLevels[0];
document.getElementById("level2").innerText = game.upgLevels[1];
document.getElementById("level3").innerText = game.upgLevels[2];
document.getElementById("effect1").innerText =game.upgEffects[0].toFixed(1);
document.getElementById("effect2").innerText = game.upgEffects[1].toFixed(1);
document.getElementById("effect3").innerText = game.upgEffects[2].toFixed(1);
if (game.bytes >= 24 || game.fileReq == true){
document.getElementById("fileReqFalse").style.display = "none";
document.getElementById("fileReqTrue").style.display = "inline-block";
game.fileReq = true;
}else{
document.getElementById("fileReqFalse").style.display = "inline-block";
document.getElementById("fileReqTrue").style.display = "none";
}
updateAch();

},50);

function produceBits(){
 if (game.produceBit == false){
   game.produceBit = true;
   game.produceByte = false;
document.getElementById("bits").innerText = "Producing";
document.getElementById("bytes").innerText = "Produce";
 } else {
   game.produceBit = false;
document.getElementById("bits").innerText = "Produce";
 }
}

function produceBytes(){
 if (game.produceByte == false){
   game.produceByte = true;
   game.produceBit = false;
document.getElementById("bytes").innerText = "Producing";
document.getElementById("bits").innerText = "Produce";
 } else {
   game.produceByte = false;
document.getElementById("bytes").innerText = "Produce";
 }
}

function buyUpg1(){
	if (game.bytes >= game.upgCosts[0]){
	   game.bytes -= game.upgCosts[0];
		game.bps *= 1.5;
		game.upgCosts[0] *= 2;
    game.upgEffects[0] *=1.5;
    game.upgLevels[0]++;
		
	}
}

function buyUpg2(){
	if (game.bytes >= game.upgCosts[1]){
	   game.bytes -= game.upgCosts[1];
		game.bitMax *= 1.5;
		game.upgCosts[1] *= 1.5;
    game.upgEffects[1] *=1.5;
    game.upgLevels[1]++;
		
	}
}

function buyUpg3(){
	if (game.bytes >= game.upgCosts[2]){
	   game.bytes -= game.upgCosts[2];
		game.byps *= 1.5;
		game.upgCosts[2] *= 2;
    game.upgEffects[2] *=1.5;
    game.upgLevels[2]++;
		
	}
}


function loadGame(){
var savegame = JSON.parse(localStorage.getItem("data"));
if (savegame !== null) {
  game = savegame;
}

if (typeof savegame.bits !== "undefined") game.bits = savegame.bits;

if (typeof savegame.bytes !== "undefined") game.bytes = savegame.bytes;

if (typeof savegame.bps !== "undefined") game.bps = savegame.bps;

if (typeof savegame.byps !== "undefined") game.byps = savegame.byps;

if (typeof savegame.bitMax !== "undefined") game.bitMax = savegame.bitMax;
if (typeof savegame.upgLevels[0] !== "undefined") game.upgLevels[0] = savegame.upgLevels[0];
if (typeof savegame.upgLevels[1] !== "undefined") game.upgLevels[1] = savegame.upgLevels[1];
if (typeof savegame.upgLevels[2] !== "undefined") game.upgLevels[2] = savegame.upgLevels[2];
if (typeof savegame.upgEffects[0] !== "undefined") game.upgEffects[0] = savegame.upgEffects[0];
if (typeof savegame.upgEffects[1] !== "undefined") game.upgEffects[1] = savegame.upgEffects[1];
if (typeof savegame.upgEffects[2] !== "undefined") game.upgEffects[2] = savegame.upgEffects[2];
if (typeof savegame.upgCosts[0] !== "undefined") game.upgCosts[0] = savegame.upgCosts[0];
if (typeof savegame.upgCosts[1] !== "undefined") game.upgCosts[1] = savegame.upgCosts[1];
if (typeof savegame.upgCosts[2] !== "undefined") game.upgCosts[2] = savegame.upgCosts[2];
game.produceBit = false;
game.produceByte = false;

if (typeof savegame.fileReq !== "undefined") game.fileReq = savegame.fileReq;


if (typeof savegame.time !== "undefined") game.time = savegame.time;
}


function save() { 
  localStorage.setItem("data", JSON.stringify(game));
  fileSave();
}
	

	
	
function resetGame(){
 restart = confirm("Are you sure? Your progress will be lost! This cannot be undone!");
 if (restart == true) {
	game.bits = 0;
	game.bytes = 0;
	game.bps = 1;
	game.byps = 0.5;
	game.bitMax = 32;
	game.divisionCost = 5;
	game.infinityPoints = 0;
	game.produceBit= false;
        game.produceByte= false;
        game.upgLevels[0] = 0;
	game.upgLevels[1] = 0;
	game.upgLevels[2] = 0;
        game.upgEffects[0] = 1;
	game.upgEffects[1] = 1;
	game.upgEffects[2] = 1;
        game.upgCosts[0] = 2;
	game.upgCosts[1] = 2;
	game.upgCosts[2] = 8;
	game.produceBit = false;
        game.produceByte = false;
	game.time = 0;
	game.fileReq= false;
   resetFiles();
        save();
  }
}

function tab(tab) {
  // hide all your tabs, then show the one the user selected.
  document.getElementById("upgrades").style.display = "none";
  document.getElementById("options").style.display = "none";

document.getElementById("files").style.display = "none";

document.getElementById("achievements").style.display = "none";
document.getElementById("stats").style.display = "none";

document.getElementById(tab).style.display = "inline-block";
}

// go to a tab for the first time, so not all show
tab('upgrades');


setInterval (function(){
	save();
},15000);

loadGame();
