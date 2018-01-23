var word = require("./word.js");
var prompt = require('prompt');

var theWord = new word();

var gameStats = {
    guessesRemaining: 8,
    Wins: 0,
    Losses: 0,

    printStats: function () {
        console.log("Wins: " + this.Wins);
        console.log("Losses: " + this.Losses);
    }
};

//
// Start the prompt
//
prompt.start();

function askForNewGame() {
    prompt.get([{
        name: 'yesno',
        message: 'Play Again? Yes or No',
        validator: /y[es]*|n[o]?/,
        warning: 'Must respond yes or no',
        required: true
    }], function (err, result) {
        if (err) {
            throw error;
        }
        console.log(result.yesno[0]);
        if (result.yesno[0].toLowerCase() === 'y') {
            console.log("new game: " + "true");
            return true;
        } else {
            console.log("new game: " + "false");
            return false;
        }
    }).then(function (result) {
        return result;
    });
}

function askForLetter() {
    prompt.get([{
        description: 'Enter a letter',
        name: 'letter',
        pattern: /^[a-zA-Z]+$/,  // allow only letters
        message: 'Enter only letters!',
        required: true
    }], function (err, result) {
        if (err) {
            throw err;
        }
        if (theWord.checkGuessedLetter(result.letter[0])) {
            console.log(theWord.getUnsolvedWord());
            console.log("CORRECT!");
            if (theWord.isWordSolved()) {
                console.log("YOU WIN!");
                gameStats.Wins++;
                gameStats.printStats();
               
                if (askForNewGame() === true) {
                    theWord.startTheGame();
                    console.log(theWord.getUnsolvedWord());
                    gameStats.guessesRemaining = 8;
                }
                console.log("outta here");
            } else {
                askForLetter();
            }
        } else {
            console.log("INCORRECT!");
            console.log(theWord.getUnsolvedWord());
            gameStats.guessesRemaining--;
            console.log("Guesses Remaining: " + gameStats.guessesRemaining);
            if (gameStats.guessesRemaining) {
                askForLetter();
            } else {
                console.log("YOU LOST!");
                gameStats.Losses++;
                gameStats.printStats();
                
                if (askForNewGame() === true) {
                    theWord.startTheGame();
                    console.log(theWord.getUnsolvedWord());
                    gameStats.guessesRemaining = 8;
                }
            }
        }
        
    });
}

theWord.startTheGame();
console.log(theWord.getUnsolvedWord());
console.log("Guesses Remaining: " + gameStats.guessesRemaining);
askForLetter(); 

　
