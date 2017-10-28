// * **Letter**: Used for each letter in the current word. 
// Each letter object should either display an underlying character, 
// or a blank placeholder (such as an underscore), depending on whether 
// or not the user has guessed the letter. This should contain letter 
// specific logic and data.

function Letter(letter) {
	this.letter = letter;
	if (this.letter == " ") {
		this.show = true;
	} else {
		this.show = false;
	}
}

Letter.prototype.printLetra = function() {
    if (this.show) {
        return this.letter;
    } else {
        return '-';
    }
};

module.exports = {
	Letter
};