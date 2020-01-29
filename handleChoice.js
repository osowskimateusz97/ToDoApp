const setup = require('./setup');
const colors = require('colors');
const handleChoice = ({ add, remove, list }) => {
	if (add) {
		if (add.length < 4) {
			return console.log(`Musisz podać minimum 4 znaki!`.red);
		}
		return setup(1, add);
	}
	if (remove) {
		return setup(2, remove);
	}
	if (list) {
		return setup(3, list);
	}
};

module.exports = handleChoice;
