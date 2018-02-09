//Imports
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

//import from local file
const notes = require('./notes');

const titleOptions = {
    describe : 'Title of Note',
    demand : true,
    alias : 't'
};

const argv = yargs
.command('add','Add a new note',{
   title : titleOptions,
    body : {
        describe: 'Body of note',
        demand: true,
        alias: 'b'
    }
})
.command('list','list of all notes')
.command('read','Read a note',{
    title: titleOptions
})
.command('remove','Remove a note',{
    title: titleOptions
})
.argv;

var proc = process.argv[2];


//functions for performing differnet operations.
if(proc === 'add'){
   var note = notes.addNote(argv.title, argv.body);
   if(note){

       console.log('Note created');
        notes.logNote(note);
    
   }else{

       console.log('Note title taken');
   }

}else if (proc === 'list'){

    var allNotes = notes.getAll();
    console.log(`printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));

}else if(proc === 'read'){

    var note = notes.getNote(argv.title);
    if(note){

        console.log('Note Readed');
        notes.logNote(note);
    
    }else{
        console.log('----');
        console.log('Note not Found');
     
    }

    }else if(proc === 'remove'){

        var noteRemoved = notes.removeNote(argv.title);
        var massage = noteRemoved ? 'Note was Removed' : 'No such note found';
        console.log(massage);

    }else{

        console.log('command not found');
    
}
