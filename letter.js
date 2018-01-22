var Letter = function(letter) {
    this.letter = letter;
    this.guessed = false;  // Is this letter contained in the word to solve?
}

Letter.prototype.checkLetter = function (letter) {
    if (letter.toLowerCase() === this.letter.toLowerCase()) {
        this.guessed = true;
    }

    if (this.guessed) {
        return this.letter;
    }
    return "_";
};

module.exports = Letter;

// module test code







