var word = require("./word.js");
var prompt = require('prompt');

var theWord = new word();

var gameStats {
    guessesRemaining: 8,
    Wins: 0,
    Losses: 0
};

//
// Start the prompt
//
prompt.start();

function askForNewGame() {
        prompt.get([{
        description: 'Play Again? Yes or No',
        name: 'yesno', 
        //message: 'are you sure?', 
        validator: /y[es]*|n[o]?/, 
        warning: 'Must respond yes or no', 
        default: 'no' 
    }], function (err, result) {
        if (result.yesno[0] === 'y') {
            return true;
        } else {
            return false;
        }        
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
        if (theWord.checkGuessedLetter(result.letter[0])) {
            console.log(theWord.getUnsolvedWord());
            console.log("CORRECT!");
            if (theWord.isWordSolved()) {
                console.log("YOU WIN!");
                gameStats.Wins++;
                if (askForNewGame()) {
                    theWord.startTheGame();
                    console.log(theWord.getUnsolvedWord());
                    gameStats.quessesRemaining = 8;
                }
            }
        } else {
            console.log("INCORRECT!");
            gameStats.guessesRemaining--;

            if (quessesRemaining) {
                askForLetter();
            } else {
                console.log("YOU LOST!");
                gameStat.Losses++;
            }
        }
        
    });
}

theWord.startTheGame();
console.log(theWord.getUnsolvedWord());
askForLetter(); 

　
