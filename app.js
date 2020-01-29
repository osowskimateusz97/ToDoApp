const argv = require('minimist')(process.argv.slice(2));
const handleChoice = require('./handleChoice');
delete argv._;
handleChoice(argv);
