const getNotes = require('./notes.js');
const chalk = require('chalk');

const msg = getNotes();
console.log(msg);

const greenMsg = chalk.green.bold('Hello Chalk World!');
console.log(greenMsg);
