
// importing module exported from notes.js file
const notes = require('./notes.js')
const yargs = require('yargs')
const chalk = require('chalk')


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
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command:'remove',
    description: 'Remove a notes!!',
    builder: {
        title: {
            describe: 'Remove Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
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

