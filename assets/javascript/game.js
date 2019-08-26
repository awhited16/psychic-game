$(document).ready(function() {

    function initialize () {

        //List of variables including alphabet array and computer random selection
        var wins = 0;
        var losses = 0;
        var guess = "";
        var guessesLeft = 9;
        var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var computerLetter = options[Math.floor(Math.random()*options.length)];


        //Variables that reference HTML

        var winsText = document.getElementById("win-number");
        var lossesText = document.getElementById("loss-number");
        var guessLeftText = document.getElementById("guesses-left");
        var guessText = document.getElementById("guesses");

        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessLeftText.textContent = "Guesses Left: " + guessesLeft;
        guessText.textContent = "Your Guesses so far: " + guess


        console.log(computerLetter);
        console.log(guess);
        console.log("wins: " + wins);
        console.log("losses: " + losses);
        console.log("guesses left:" + guessesLeft);

    

        document.onkeyup = (function(event) {
            var guess = event.key;

            guessText.textContent = "Your Guesses so far: " + guess

            if (guess === computerLetter) {
                console.log("yes");
                wins++;
            } else if (guessesLeft < 9) {
                console.log("other guess");
                guessesLeft--;
                $(guessText).append(", "+ guessText);
            } else {
                console.log("first guess");
                guessesLeft--;
                $(guessText).append(guessText);
            }

            //Update game information
            winsText.textContent = "Wins: " + wins;
            lossesText.textContent = "Losses: " + losses;
            guessLeftText.textContent = "Guesses Left: " + guessesLeft;
            

            console.log(guess);
            console.log("guessesLeft: " + guessesLeft);

            if (guessesLeft = 0) {
                losses++;
                initialize ()
            }

        });

    
    }

    initialize ()

    //Display wins, losses, and guess info





});