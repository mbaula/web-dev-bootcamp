var randNumLeft = Math.floor(Math.random()*6)+1;

var randDiceImgL = "images/dice" + randNumLeft + ".png";

var imageLeft = document.querySelectorAll("img")[0];

imageLeft.setAttribute("src", randDiceImgL);

var randNumRight = Math.floor(Math.random()*6)+1;

var randDiceImgR = "images/dice" + randNumRight + ".png";

var imageRight = document.querySelectorAll("img")[1];

imageRight.setAttribute("src", randDiceImgR);


if (randNumLeft==randNumRight) {
  document.getElementById("title").innerHTML = "Draw!";
}
else if(randNumLeft>randNumRight) {
  document.getElementById("title").innerHTML = "🏆Player 1 Wins!";
}
else if(randNumLeft<randNumRight) {
  document.getElementById("title").innerHTML = "🏆Player 2 Wins!";
}

document.getElementsByClassName("replay")[0].style.visibility = "visible";

function refreshPage(){
    window.location.reload();
} 
