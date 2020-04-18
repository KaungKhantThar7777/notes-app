// const fs = require('fs');

// fs.writeFileSync('notes.txt','Hello, my name is Kaung Khant Thar\n');

// fs.appendFileSync('notes.txt','I started learning NodeJs.');

// const validator = require('validator');
// const util = require('./utils');


// getNotes();
// console.log(util.name);

// console.log(util.add(1,2));

// console.log(validator.isEmail('example@example.com'));

const yargs = require('yargs');
const notes = require('./notes');


yargs.version("1.0.1");
yargs.command({
    command:'add',
    describe:'Adding a new note',
    builder:{
        title: {
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body: {
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title,argv.body)
    }
})


yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            type:'string',
            demandOption:true,
            describe:'Note title'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title);
    }
})


yargs.command({
    command:'list',
    describe:'Listing notes',
    handler: function() {
        notes.listNotes();
    }
})


yargs.command({
    command:'read',
    describe:'Reading a note',
    builder:{
        title:{
            type:'string',
            demandOption:true,
            describe:'Note title'
        }
    },
    handler: function(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse();
// console.log(yargs.argv);