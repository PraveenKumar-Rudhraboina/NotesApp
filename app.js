const name1 = require('./utils.js') 
console.log(name1(1,2))

const name2 = require('./notes.js')
console.log(name2())

const chalk  = require('chalk')
console.log(chalk.yellow.italic.strikethrough.inverse.underline('Success!!'))