var gameWords = require("./game_words.js");
var aLetter = require("./letter.js");

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
        var letter = new aLetter(this.wordToSolve[i]);
        // if the word contains a space then initilize guessed to true
        if (this.wordToSolve[i] = " ") {
            this.wordToSolve[i].guessed = true;
        }
        this.letterArray.push(letter);
    }
};

// test if this is a good letter
Word.prototype.checkGuessedLetter = function (letter) {
    var result = false;
    for (var i = 0; i < this.wordToSolve.length; i++) {
        result = this.letterArray[i].checkLetter(letter) + " ";
        //console.log(this.letterArray[i]);
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
    return result;
}

Word.prototype.isWordSolved = function() {
    for (var i = 0; i < this.wordToSolve.length; i++) {
        if (this.wordToSolve[i].guessed === false) {
            this.solved = false;
            break;
        } else {
            this.solved = true;
        }
    }
    return(this.solved);
}

module.exports = Word;

// module test code
//var word = new Word();
//word.startTheGame();

//for (var i = 0; i < word.wordToSolve.length; i++) {
//    console.log(word.checkGuessedLetter(word.wordToSolve[i]));
//}

//console.log(word.isWordSolved());
