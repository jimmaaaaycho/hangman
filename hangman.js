
var word = require("./word.js");
var letter = require("./letter.js");
var inquirer = require("inquirer");

function randomGenerator() {
    var words = ['white', 'blue','red','green'];
    var rnumber = Math.floor((Math.random() * words.length)+1);
    var rword = words[rnumber - 1];
    var wordsplit = rword.split("");
    return wordsplit;
}


function start() {
	inquirer.prompt([
		{
			name: "response",
			message: "Would you like to play? Type y for Yes and n for No"
			
		}
		]).then(function(user) {
			var answer = user.response;
			if (answer === "y") {
                var test = randomGenerator();
				newWord = new word.Word(test);
				userGuess();
			} else if (answer === "n") {
				console.log("Goodbye");
				return;
			}
		});
}

function userGuess() {
    console.log(newWord.print());
    inquirer.prompt([{
        name: 'letter',
        type: 'text',
        message: 'Pick a letter any letter but only 1 letter please!:',
        validate: function(string) {
            var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
            if (regEx.test(string)) {
                return true;
            } else {
                return false;
                console.log("Please enter 1 letter at a time");

            }
        }
    }]).then(function(user) {
        var letter = user.letter;
        newWord.checkLetter(letter);
        if (newWord.isLetterValid) {
            console.log("letter has been used, please try a different one");
            userGuess();
        } else {
            if (newWord.isComplete()) {
                console.log("You win! The word was: " + newWord.chosenWord);
                start();
            } else if (newWord.trysLeft === 0) {
                console.log("No more trys. The word was " + " ' " + newWord.chosenWord + " ' ");
                start();
            } else {
                console.log("You have " + newWord.trysLeft + " guesses remaining");
                userGuess();
            }
        }
    });
}


start();
