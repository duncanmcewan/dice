var p1wins = 0;
var p2wins = 0;
var draws = 0;

document.getElementById("p1WinCount").innerHTML = p1wins;
document.getElementById("p2WinCount").innerHTML = p2wins;
document.getElementById("drawCount").innerHTML = draws;

function playDice() {

  var imageNames = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

  var myNum1 = Math.floor((Math.random() * 6));
  var myImage1 = "images/"+imageNames[myNum1];

  var myNum2 = Math.floor((Math.random() * 6));
  var myImage2 = "images/"+imageNames[myNum2];


  document.getElementById("player1").src=myImage1;
  document.getElementById("player2").src=myImage2;

  if (myNum1 > myNum2) {
    document.getElementById("winner").innerHTML = "Player 1 wins !!";
    p1wins++;
  } else if (myNum2 > myNum1) {
    document.getElementById("winner").innerHTML = "Player 2 wins !!";
    p2wins++;
  } else {
    document.getElementById("winner").innerHTML = "IT'S A DRAW !!";
    draws++;
  }

  document.getElementById("p1WinCount").innerHTML = p1wins;
  document.getElementById("p2WinCount").innerHTML = p2wins;
  document.getElementById("drawCount").innerHTML = draws;


  //OTHER WAY TO DO THIS :
  //var DiceNumber = Math.floor((Math.random() * 6) +1);
  // var RandomImage = "dice" + DiceNumber + ".PNG";
  //var.image = document.querySelectorall("img")[0];
  //image.setAttribute("src", ImageSource);
  //
  //var DiceNumber2 = Math.floor((Math.random() * 6) +1);
  // var RandomImage2 = "dice" + DiceNumber2 + ".PNG";
  //var.image2 = document.querySelectorall("img")[1];
  //image2.setAttribute("src", ImageSource2);
  //

}
