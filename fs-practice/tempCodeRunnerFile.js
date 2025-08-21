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