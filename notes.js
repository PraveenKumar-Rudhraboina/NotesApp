const fs = require('fs')
const chalk = require('chalk')
const getNotes = function(){
    return "Your Notes...."
}

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New Note Added!!!!')
    } else {
        console.log('Note title already taken!!!!')
    }

    
}

const removeNote = function(title){
    const notes = loadNotes()
    const updatedNotes = notes.filter(function(note){
        return note.title !== title
    })
    if (updatedNotes.length < notes.length){
        console.log(chalk.green.inverse('Note Removed!!!!'))
        saveNotes(updatedNotes)
    } else {
        console.log(chalk.red.inverse("No Note Removed!!!!"))
    }
}

const saveNotes = function(notes){
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)

}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch(e){
        return []
    }
    
}
module.exports = {
    getNotes: getNotes.apply,
    addNote: addNote,
    removeNote: removeNote
} 