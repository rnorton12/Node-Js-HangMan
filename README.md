# Node-Js-HangMan - Assignment 9

This a hangman game implemented using Node.js with npm packages.  The theme of the game is based upon the name of the fifty states of the United States of America.  When game starts a random state name will be chosen to solve.  When prompted enter a letter contained within the state name.  The player will start with a chance to guess eight(8) incorrect letters not contained in the state before the game is over.  If a correct letter is guessed, a positive indication will be displayed and the correct guessed letter will be displayed within the correct location of the state name.  Otherwise, a negative indication will be given and the number of guesses remaining will be decremented by 1.

## Requirements to play the game:
Type npm install: This will install the following npm packages: prompt and color.

To run the game enter: node hangman.js and follow the prompts.

## Code structure
The software is comprised of four modules
* hangman.js
* word.js
* letter.js
* game_words.js

**hangman.js** is the software entry point.  It utilizes the npm packages "*prompt*" and "*color*" to get player input and display game output.

**word.js** is a constructor that contains the word to be solved an array of letter objects that comprise the word and keeps track if the word has been solved.

**letter.js** is a constructor containing the letter of the word and keeps track if the letter has been guessed.

**game_word.js** is constructor containing the available words that the game can generate.

**Author:** *Roy Norton*