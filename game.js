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
  upgCosts: [2,2,8]
};

setInterval (function() {
if (game.produceBit == true){
  game.bits += game.bps/20;
}
if (game.produceByte == true){
  if (game.bits > 0){
  game.bits -= (game.byps*8)/20
  game.bytes += game.byps/20;
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
},50)

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
