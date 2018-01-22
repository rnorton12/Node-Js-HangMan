var gameWords = require("./game_words.js");
var aLetter = require("./letter.js");

var Word = function() {
    this.wordToSolve = "";
    this.letterArray = [];
    this.solved = false;
}

Word.prototype.setTheWordToSolve = function () {
    var theWord = new gameWords();
    this.wordToSolve = theWord.getRandomWord();
    for (var i = 0; i < this.wordToSolve.length; i++) {
        var letter = new aLetter(this.wordToSolve[i]);
        this.letterArray.push(letter);
    }
};

// test if this is a good letter
Word.prototype.checkGuessedLetter = function(letter) {
    var outputText = "";
    for (var i = 0; i < this.wordToSolve.length; i++) {
        outputText += this.letterArray[i].checkLetter(letter) + " ";
        console.log(this.letterArray[i]);
    }
    return (outputText);
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
var word = new Word();
word.setTheWordToSolve();

for (var i = 0; i < word.wordToSolve.length; i++) {
    console.log(word.checkGuessedLetter(word.wordToSolve[i]));
}

console.log(word.isWordSolved());
