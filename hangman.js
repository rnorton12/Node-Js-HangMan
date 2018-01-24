var word = require("./word.js");
var prompt = require('prompt');
var colors = require("colors/safe");

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });

var theWord = new word();

var gameStats = {
    guessesRemaining: 8,
    Wins: 0,
    Losses: 0,

    printStats: function () {
        console.log(colors.green("Wins: ") + colors.grey(this.Wins));
        console.log(colors.red("Losses: ") + colors.grey(this.Losses));
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
            console.log(colors.rainbow("Alright. Lets GO!"));
            theWord.startTheGame();
            console.log(theWord.getUnsolvedWord());
            gameStats.guessesRemaining = 8;
            askForLetter();
        } else {
            console.log(colors.rainbow("Thanks for Playing!"));
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
        if (err) {
            throw err;
        }
        if (theWord.checkGuessedLetter(result.letter[0])) {
            console.log(theWord.getUnsolvedWord());
            console.log(colors.green("CORRECT!"));
            if (theWord.isWordSolved()) {
                console.log(colors.rainbow("YOU WIN!"));
                gameStats.Wins++;
                gameStats.printStats();
                askForNewGame();
            } else {
                askForLetter();
            }
        } else {
            console.log(colors.red("INCORRECT!"));
            console.log(theWord.getUnsolvedWord());
            gameStats.guessesRemaining--;
            console.log("Guesses Remaining: " + gameStats.guessesRemaining);
            if (gameStats.guessesRemaining) {
                askForLetter();
            } else {
                console.log(colors.red("YOU LOST!"));
                gameStats.Losses++;
                gameStats.printStats();
                askForNewGame();
            }
        }
        
    });
}

theWord.startTheGame();
console.log(theWord.getUnsolvedWord());
console.log("Guesses Remaining: " + gameStats.guessesRemaining);
askForLetter(); 

　
