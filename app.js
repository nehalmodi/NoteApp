const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');
const fs = require('fs');



console.log('************');
//console.log(process.argv);

yargs.command({
    command : 'add',
    describe : 'Adding a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command : 'remove',
    describe : 'Removing a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }  
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command : 'read',
    describe : 'Reading a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }  
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

yargs.command({
    command : 'list',
    describe : 'Listing all notes',
    handler() {
        notes.listNotes();
    }
})
yargs.parse();



