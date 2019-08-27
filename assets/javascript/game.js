$(document).ready(function() {



    //List of starting number of wins and losses
    var wins = 0;
    var losses = 0;

    function initialize () {

        //List of variables that restart at the end of each game
        var guessList = [];
        var guessesLeft = 9;
        var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var computerLetter = options[Math.floor(Math.random()*options.length)];
        var guess;


        //Variables that reference HTML

        var winsText = document.getElementById("win-number");
        var lossesText = document.getElementById("loss-number");
        var guessLeftText = document.getElementById("guesses-left");
        var guessText = document.getElementById("guesses");

        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessLeftText.textContent = "Guesses Left: " + guessesLeft;


        console.log(computerLetter);
        console.log(guess);
        console.log("wins: " + wins);
        console.log("losses: " + losses);
        console.log("guesses left:" + guessesLeft);

    

        document.onkeyup = (function(event) {
            var guess = event.key;

            //add win if guess is correct, restart game

            if (guess === computerLetter) {
                console.log("yes");
                wins++;
                guessesLeft = 9;
                document.getElementById("guesses").innerHTML = "Your Guesses so far: "
                initialize ();
            }
            

            //add guess to list of guesses, reduce number of guesses

            if (guess !== computerLetter && guessesLeft < 9) {
                console.log("other guess");
                guessesLeft--;
                console.log(guess);
                guessList.push(guess);
                document.getElementById("guesses").innerHTML = "Your Guesses so far: " + guessList;
            }

            if (guess !== computerLetter && guessesLeft === 9) {
                console.log("first guess");
                guessesLeft = 8;
                console.log(guess)
                guessList.push(guess);
                document.getElementById("guesses").innerHTML = "Your Guesses so far: " + guessList;
            }

            
            //restarts game, adding one to number of losses

            if (guessesLeft === 0) {
                losses++;
                guessesLeft = 9;
                document.getElementById("guesses").innerHTML = "Your Guesses so far: "
                initialize ();
            }


            //Update game information
            winsText.textContent = "Wins: " + wins;
            lossesText.textContent = "Losses: " + losses;
            guessLeftText.textContent = "Guesses Left: " + guessesLeft;

        });

    
    }

    initialize ()





});