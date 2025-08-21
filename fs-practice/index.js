const {readFile, writeFile} = require('fs');
const {readFileSync, writeFileSync} = require('fs');


//these do not have priority over the synchronous methods and dont happen till all the synchronous methods are done
//Read asynchronously
readFile('./notes.txt', 'utf8', (err) => {
  if (err) {console.error(err);return;}
    console.log("File read Successfully (Asynchronous)");

});
const read = require('fs').realpath;

//Read synchronously
readFileSync('./notes.txt', 'utf8', (err) => {
  if (err) {console.error(err);return;}
  console.log("File read Successfully (Synchronous)");

});
const readSync = require('fs').realpathSync;

//These have prority over the asynchronous methods and print first
//Write asynchronously
writeFile('./asyncOutput.txt', 'Written with fs.writeFile (asynchronous).', (err) => {
  if (err) {console.error(err);return;}
  console.log("File written Successfully (Asynchronous)");
});
const write = require('fs').writeFile;

//Write synchronously
writeFileSync('./syncOutput.txt', 'Written with fs.writeFile (synchronous).', (err) => {
  if (err) {console.error(err);return;}
  console.log("File written Successfully (Synchronous)");
});
 const writeSync = require('fs').writeFileSync;

//Flags

// a flag
//appends to the file if it exists, otherwise creates a new file
writeFile('./notes.txt',`Hello World`,{flag:'a'}, (err) => {
  if (err) {console.error(err);return;}
  console.log("File written Successfully with 'a' flag");
});

//w flag
//overwrites the file if it exists, otherwise creates a new file
writeFile('./notes.txt',`Hello 7 Wonders of the World`,{flag:'w'}, (err) => {
  if (err) {console.log(err);return;}
  console.log("File written Successfully with 'w' flag");
});

// //wx flag
// //creates a new file, if the file already exists, it throws an error
// writeFile('./notes.txt',`Hello Wonder of the World`,{flag:'wx'}, (err) => {
//   if (err) {console.error(err);return;}
//   console.log("File written Successfully with 'wx' flag");
// });

//r flag
//reads the file if it exists, otherwise throws an error
readFile('./notes.txt', 'utf8', (err, data) => {
  if (err) {console.error(err);return;}
  else{
    console.log("File read Successfully with 'r' flag");
  console.log(data);
  }
});

// Journal Project

const {writeFile} = require('fs');
const readlineSync = require('readline-sync');

function addEntry() {
  let entry = readlineSync.question('Enter your journal entry: ');
  writeFile('./journal.txt', entry + '\n', {flag: 'a'}, (err) => {
    if (err) {console.error(err); return;}
    console.log("Journal entry added successfully.");
    console.log(entry)
  });
}
addEntry();