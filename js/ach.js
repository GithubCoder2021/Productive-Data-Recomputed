function updateAch() {
  if (game.bits > 0) {
    document.getElementById("ach1").style.backgroundColor = "green";
  }
  if (game.bytes >= 1) {
    document.getElementById("ach2").style.backgroundColor = "green";
  }
  if (game.upgLevels[0]>= 1) {
    document.getElementById("ach3").style.backgroundColor = "green";
  }
  if (game.upgLevels[1]>= 1) {
    document.getElementById("ach4").style.backgroundColor = "green";
  }
  if (game.upgLevels[2]>= 1) {
    document.getElementById("ach5").style.backgroundColor = "green";
  }
}