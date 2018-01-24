var gameWords = require("./game_words.js");
var aLetter = require("./letter.js");
var colors = require("colors/safe");

var Word = function() {
    this.wordToSolve = "";
    this.letterArray = [];
    this.solved = false;
}

Word.prototype.startTheGame = function () {
    // initialize object
    this.wordToSolve = "";
    this.letterArray = [];
    this.solved = false;

    // get a game word to solve
    var theWord = new gameWords();
    this.wordToSolve = theWord.getRandomWord();
    for (var i = 0; i < this.wordToSolve.length; i++) {
        var letter = new aLetter(this.wordToSolve[i].toLowerCase());
        // if the word contains a space then initialize guessed to true
        if (this.wordToSolve[i].toLowerCase() === " ") {
            letter.guessed = true;
        }
        this.letterArray.push(letter);
    }
};

// test if this is a good letter
Word.prototype.checkGuessedLetter = function (letter) {
    var result = false;
    for (var i = 0; i < this.wordToSolve.length; i++) {
        if (this.letterArray[i].letter === letter.toLowerCase()) {
            result = true;
            this.letterArray[i].guessed = result;
        }
    }
    return result;
}

Word.prototype.getUnsolvedWord = function () {
    var result = "";
    for (var i = 0; i < this.wordToSolve.length; i++) {
        if (this.letterArray[i].guessed) {
            result += this.letterArray[i].letter + " ";
        }
        else {
            result += "_" + " ";
        }
    }
    return colors.blue(result);
}

Word.prototype.isWordSolved = function() {
    for (var i = 0; i < this.wordToSolve.length; i++) {
        if (this.letterArray[i].guessed === false) {
            this.solved = false;
            break;
        } else {
            this.solved = true;
        }
    }
    return(this.solved);
}

module.exports = Word;

// // module test code
// var word = new Word();
// word.startTheGame();
// console.log(word.wordToSolve);
// console.log(word.letterArray);
// console.log(word.solved);
// console.log(word.getUnsolvedWord());

// for (var i = 0; i < word.wordToSolve.length; i++) {
//     console.log(word.wordToSolve[i]);
//     console.log(word.checkGuessedLetter(word.wordToSolve[i]));
//     console.log(word.letterArray);
//     console.log(word.getUnsolvedWord());
// }
// console.log("solved: " + word.isWordSolved());

