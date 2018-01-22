var GameWords = function () {
    this.words = [
        "Alabama", "Arizona","Alaska", "Arkansas", "California",
        "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
        "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
        "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
        "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
        "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
        "Virginia", "Washington", "West Virginia", "Wisconsin","Wyoming"
    ];
}

GameWords.prototype.getRandomWord = function () {
    //console.log(this.words.length);
    return(this.words[Math.floor(Math.random() * this.words.length)]);
};

// module test code
// var wordToGuess = new GameWords();
// var theWord = wordToGuess.getRandomWord();
// console.log(theWord);

module.exports = GameWords;
