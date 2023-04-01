
function updateAch() {
  if (game.bits > 0) {
    document.getElementById("ach1").style.backgroundColor = "green";
  }
  if (game.bytes >= 1) {
    document.getElementById("ach2").style.backgroundColor = "green";
  }
}
