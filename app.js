// const fs = require('fs');

// fs.writeFileSync('notes.txt','Hello, my name is Kaung Khant Thar\n');

// fs.appendFileSync('notes.txt','I started learning NodeJs.');

const validator = require('validator');
const util = require('./utils');
const getNotes = require('./notes');

// getNotes();
// console.log(util.name);

// console.log(util.add(1,2));

// console.log(validator.isEmail('example@example.com'));

const chalk = require('chalk');
console.log(chalk.red.bold.inverse("Fail!!!"));