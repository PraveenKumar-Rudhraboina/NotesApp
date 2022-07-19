const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {"Your Notes...."}

const addNote = (title, body) => {
    const notes = loadNotes()
    //arrow function short hand syntax
    const duplicateNotes = notes.filter((note) =>  note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note Added!!!!'))
    } else {
        console.log(chalk.red.inverse('Note title already taken!!!!'))
    }

    
}

const removeNote = (title) => {
    const notes = loadNotes()
    // arrow function
    const updatedNotes = notes.filter((note) => note.title !== title)
    if (updatedNotes.length < notes.length){
        console.log(chalk.green.inverse('Note Removed!!!!'))
        saveNotes(updatedNotes)
    } else {
        console.log(chalk.red.inverse("No Note Removed!!!!"))
    }
}

const listNotes = () =>{
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your Notes!!!!!'))
    notes.forEach((note) => { 
        console.log(note.title)
    });
}

const readNotes = (title) => {
    const notes = loadNotes()
    console.log(chalk.yellow.inverse("Reading Notes!!"))
    const findTitle = notes.find((note)=> note.title === title)
    
    if (findTitle){
            console.log(chalk.red.italic.inverse.strikethrough(findTitle.title))
            console.log(findTitle.body)
        // console.log(findTitle)
    } else{
        console.log(chalk.red.inverse("Error!!!!"))
    }
}
const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)

}
// debugger
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch(e){
        return []
    }
    
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
} 

// debugger use this to stop the code execute after a particular line for debugging 
// use this command for inspection of node inspect app.js add --title="courses" --body="dsa"
// chrome://inspect/#devices open this in chrome to do inspection or debugging in chrome
