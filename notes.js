const fs = require('fs');
const chalk = require('chalk')

const listNotes = () => {
    console.log(chalk.blueBright('Your notes are: \n'));
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(`Title: ${note.title} ${note.body}`);
    });

}

const readNote = (title) => {
    const notes = loadNotes();

    const searchNote = notes.find(note => note.title === title);

    if(searchNote){
        console.log(chalk.blueBright.inverse(`Title: ${title}`));
        console.log(searchNote.body);
    }
    else{
        console.log(chalk.red('Note not Found!!!'))
    }
}
const addNote = (title,body) => {
    const notes = loadNotes();
    
    const duplicateNote = notes.find(note => note.title == title);
    if(duplicateNote)
        console.log(chalk.red.inverse('Title is already taken!'));
    else{
        notes.push({
            title,body
        })
        saveNotes(notes);
        console.log(chalk.red.inverse('Successfully added!'));
    }



}

const removeNote = (title) => {
    const notes = loadNotes();
    const removeNotes = notes.filter(note => note.title != title);
    if(notes.length != removeNotes){
        console.log(chalk.green.inverse('Successfully removed!'));
    }else{
        console.log(chalk.red.inverse(`Title: ${title} does not exist`));
    }
    saveNotes(removeNote);
}

const saveNotes = (notes) => fs.writeFileSync('./notes.txt',JSON.stringify(notes));

const loadNotes = () => {
    try{
        const notesJSON = fs.readFileSync('./notes.txt');
        return JSON.parse(notesJSON);
    }catch(e){
        return [];
    }
    
    
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
};