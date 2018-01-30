const fs = require('fs');//import

//made a function and added an empty array
var addNote = (title, body) => {
 var notes = [];
 var note = {//passes the values for a single note.
     title,
     body
 };

 //use try and catch to get error and deal according to it. 
try{
 var notesString = fs.readFileSync('notes-data.json');//to read the value from JSON file.
 notes = JSON.parse(notesString);
}catch(e){
}

//to match the title of single note in notes array for less redundancy.
var duplicateNotes = notes.filter((note) => note.title === title);

if(duplicateNotes.length === 0){
     notes.push(note);
 fs.writeFileSync('notes-data.json', JSON.stringify(notes));
 /*to add new file if the file is not present
and pass the data along with in string format*/
}
};



var getAll = () => {
    console.log('getting all notes')
};

var getNote = (title) => {
    console.log('getting note: ', title);
}

var removeNote = (title) => {
    console.log('removing note:', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};