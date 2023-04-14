


function formatTime(){
    if (game.time >= 3600){
		document.getElementById("time").innerText = Math.floor(game.time / 3600) + ":" + Math.floor(game.time/60)% 60+ ":" +  (Math.floor(game.time) % 3600) % 60;
	} else if (game.time >= 60){
		document.getElementById("time").innerText = Math.floor(game.time / 60) + ":" + Math.floor(game.time % 60);
	} else{
		document.getElementById("time").innerText = game.time.toFixed(2) + " seconds";
	}
}

setInterval (function(){
	game.time += 0.05;
    formatTime();
},50);