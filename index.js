var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
(document.getElementById("img1")).setAttribute("src","images/dice" + randomNumber1 + ".png");  
(document.getElementById("img2")).setAttribute("src","images/dice" + randomNumber2 + ".png");  
console.log(randomNumber1);
if(randomNumber1 > randomNumber2){
    document.getElementById("header").innerHTML = "Player 1 Wins 🚩"
}else if(randomNumber1 < randomNumber2){
    document.getElementById("header").innerHTML = "Player 2 Wins 🚩"
}else{
    document.getElementById("header").innerHTML = "Draw 🖖"
}