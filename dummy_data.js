const name1 = require('./utils.js') 
console.log(name1(1,2))

// importing module exported from notes.js file
const name2 = require('./notes.js')
console.log(name2())




// imported chalk library and print the values in different styles
// const chalk  = require('chalk')
// console.log(chalk.yellow.italic.strikethrough.inverse.underline('Success!!'))

// command line arguments
// console.log(process.argv)
// const command = process.argv[2]
// if (command === 'add'){
//     console.log('Adding Notes!!')
// } else if (command === 'remove'){
//     console.log("Removing Notes!!!!")
// }



const yargs = require('yargs')

//customize yargs version node app.js --version, node app.js --help
yargs.version('1.1.0')

// create add command
yargs.command({
    command:'add',
    describe: ' Add a new Note!!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Body of notes!!',
            demandOption: true,
            type: 'string'
        }
    },
    handler:function(argv){
        console.log("Title :" + argv.title)
        console.log("Body :"+argv.body)
    }
})

// create remove command
yargs.command({
    command:'remove',
    description: 'Remove a notes!!',
    handler: function(){
        console.log("Removing a notes here!!!")
    }
})

// create list command
yargs.command({
    command: 'list',
    description: 'Listing notes!!',
    handler: function(){
        console.log("listing notes here!!")
    }
})

// create read command
yargs.command({
    command: 'read',
    description: 'Reading Notes!!',
    handler: function(){
        console.log("Reading Notes here!!!!")
    }
})

yargs.parse()
// console.log(yargs.argv)

