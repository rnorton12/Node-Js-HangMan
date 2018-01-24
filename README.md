# Node-Js-HangMan - Assignment 9

This is a hangman game implemented using Node.js with npm packages.  The theme of the game is based upon the name of the fifty states of the United States of America.  When the game starts a random state name will be chosen to solve.  When prompted enter a letter that you might think is contained within the state name.  The player will start with a chance to guess eight incorrect letters not contained in the state name before the game is over.  If a correct letter is guessed, a positive indication will be displayed and the correct guessed letter will be displayed at the location(s) it appears within the state name.  Otherwise, a negative indication will be given and the number of guesses remaining will be decremented by 1.

## Requirements to play the game:
To install the required npm packages, enter `npm install` at the bash terminal.  The will install the "*prompt*" and "*color*" packages.

To run the game enter `node hangman.js` at the bash terminal and follow the prompts.

## Code structure
The game is comprised of four modules
* hangman.js
* word.js
* letter.js
* game_words.js

**hangman.js** is the game entry point.  It utilizes the npm packages "*prompt*" and "*color*" to get player input and display game output.

**word.js** is a constructor that contains the word to be solved, an array of letter objects that comprise the word and keeps track if the word has been solved.

**letter.js** is a constructor containing the letter of the word and keeps track if the letter has been guessed.

**game_words.js** is constructor containing the available words that the game can generate.

**Author:** *Roy Norton*