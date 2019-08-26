$(document).ready(function() {

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
    var guessesLeftText = document.getElementById("guesses");
    var guessText = document.getElementById("guesses-left");

    //Have computer select random letter

    console.log(computerLetter);
    console.log(guess);
    console.log("wins: " + wins);
    console.log("losses: " + losses);
    console.log("guesses left:" + guessesLeft);

    document.onkeyup = (function(event) {
        var guess = event.key;

        if (guess === computerLetter) {
            console.log("yes");
            wins++;
        } else if (guessesLeft = 9) {
            console.log("first guess");
            guessesLeft--;
            $(".guesses").append(guess);
        } else (guessesLeft < 9) 
            console.log("other guess");
            $(".guesses").append(", "+ guess)
            guessesLeft--;



        console.log(guess);
    });

    //Display wins, losses, and guess info

    winsText = "Wins: " + wins
    lossesText = "Losses: " + losses
    guessLeftText = "Guesses Left: " + guessesLeft



});