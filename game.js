//variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var myGuess = document.getElementById("guesses");
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                

//Functions
var getLetter = Math.floor(Math.random() * letters.length);
var randomLetter = letters[getLetter];

console.log(randomLetter);
//reset Game
function resetGame(){
	guessesLeft = 9;
	document.getElementById("wins").textContent = "Wins: " + wins;
	document.getElementById("losses").textContent = "Losses: " + losses;
	document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
	document.getElementById("guesses").textContent = "Guesses so far: ";
	getLetter = Math.floor(Math.random() * letters.length);
	randomLetter = letters[getLetter];
}
resetGame();

//start game
document.onkeydown = function(){
    var letterPressed = event.key;
    myGuess += " " + letterPressed + ",";
    

    if(letterPressed == randomLetter){
        document.getElementById("wins").textContent = ++wins;
        alert("Wow, you ARE psychic!")
        resetGame();
    }
    else if(letterPressed != randomLetter){
        document.getElementById("guesses").textContent = "Guesses Left:" + --guessesLeft;
        if(guessesLeft === 0){
            alert("YOU LOSE!")
        } 
        if(guessesLeft === 0){
            document.getElementById('losses').textContent = "Losses: " + ++losses;
        }
        resetGame();
    }
}

