const {readFile, writeFile} = require('fs');
const {readFileSync, writeFileSync} = require('fs');

//Read asynchronously
readFile('./notes.txt', 'utf8', (err, data) => {
  if (err) {console.error(err);return;}
    console.log("File read Successfully (Asynchronous)");
    console.log(data);
});
const read = require('fs').realpath;

//Read synchronously
readFileSync('./notes.txt', 'utf8', (err, data) => {
  if (err) {console.error(err);return;}
  console.log("File read Successfully (Synchronous)");
  console.log(data);
});
const readSync = require('fs').realpathSync;

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
writeFile('./notes.txt',`Hello World`,{flag:'a'})

//w flag
writeFile('./notes.txt',`Hello 7 Wonders of the World`,{flag:'w'})

//wx flag
writeFile('./notes.txt',`Hello Wonder of the World`,{flag:'wx'})

//r flag
readFile('./notes.txt', 'utf8', (err, data) => {
  if (err) {console.error(err);return;}
  console.log("File read Successfully with 'r' flag");
  console.log(data);
});