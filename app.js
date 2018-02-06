//Imports
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

//import from local file
const notes = require('./notes');

const argv = yargs.argv;
var proc = process.argv[2];
console.log("process:", proc);
console.log('process: ',process.argv);
console.log('yargs: ', argv);

//functions for performing differnet operations.
if(proc === 'add'){
   var note = notes.addNote(argv.title, argv.body);
   if(note){

       console.log('Note created');
       console.log('----');
       console.log(`Title: ${note.title}`);
       console.log(`Body: ${note.body}`);
    
   }else{

       console.log('Note title taken');
   }

}else if (proc === 'list'){

    notes.listFun(argv.title, argv.body);

}else{

    console.log('command not found');
    
}