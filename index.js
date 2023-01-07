var randomNumber1=Math.floor(Math.random()*6)+1;
//it will give a random number between 1-6
//now we will use this random number to select a random dice image
//we can use concatenation to add this number to the end of the string "dice" and get our random number dice image
var randomDiceImage="dice" + randomNumber1 + ".png"; //now we can use this string to change the source of the image to a random image
var randomImageSource="images/"+randomDiceImage;//this will give random images from 1 to 6
var image1=document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);


//for second image

 var randomNumber2=Math.floor(Math.random()*6)+1;
 var randomImageSource2="images/dice"+randomNumber2+".png";
 document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="👑 Player 1 wins";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="👑 Player 2 wins";
}else{
    document.querySelector("h1").innerHTML="It's a Draw!";
}
