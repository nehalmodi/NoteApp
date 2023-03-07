const fs = require('fs');
const chalk = require('chalk')

const addNote = (title , body) => {
    
    const notes = loadNotes();
    //const duplicateNoets = notes.filter( (note) => note.title === title )
    const duplicateNoet = notes.find( (note) => note.title === title )

    if(!duplicateNoet){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added')
    } else {
        console.log('Note title taken!')
    }
}

const readNote = (title) => {
    
    const notes = loadNotes();
    //const duplicateNoets = notes.filter( (note) => note.title === title )
    const duplicateNoet = notes.find( (note) => note.title === title )

    if(duplicateNoet){
        console.log(chalk.green.bold(title + " : " ) + duplicateNoet.body);
    } else {
        console.log(chalk.red('error'))
    }
}

const removeNote = (title) => {
   
    const notes = loadNotes();
    const duplicateNoets = notes.filter( (note) => note.title != title )

    if(notes.length > duplicateNoets.length ){
        saveNotes(duplicateNoets);
        console.log(chalk.green.inverse('success'));
    }
    else{
        console.log(chalk.red.inverse('error'));
    }
}

const listNotes = () => {
    console.log(chalk.green.inverse("Your notes!!!\n"));
    const note = loadNotes();
    note.forEach(element => {
        console.log(chalk.blue.bold(element.title) +  " : "+ element.body);
    });
}


const saveNotes = (notes) => {
    const  dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON) 
    
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
    
}


module.exports = {
    
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote

}