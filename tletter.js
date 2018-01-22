
var Letter = function(letter) {
    this.letter = letter;
    this.guessed = false;  // Is this letter contained in the word to solve?
}

Letter.prototype.checkLetter = function (letter) {
    var result = false;
    if (letter.toLowerCase() === this.letter.toLowerCase()) {
        result = this.guessed = true;
    }
    return result;
};

module.exports = Letter;

// module test code

　
　
　
　
　
　
　
