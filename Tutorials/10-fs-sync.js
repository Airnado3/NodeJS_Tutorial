const {readFileSync, writeFileSync} = require('fs');
const path = require('path');

console.log('Winter Is Here');
/*
 Synchronous(fs.readFileSync and fs.writeFileSync ...ect)
 is considered a blocking code
 Blocks the event loop until the operation is complete
 NO other code runs during that time
 simpler to write but can freez the server is the file is large or the disk space is low

 Performance: slow when handling many requests becasue each operation halts all code executions
 Uses: Best of one of programs like utilities or bacj-ups, or large data changes
*/

const first = readFileSync(path.join(__dirname,'/content/first.txt'),'utf8');
const second = readFileSync(path.join(__dirname,'/content/second.txt'),'utf8');
const third = readFileSync(path.join(__dirname,'/content/third.txt'),'utf8');
console.log(first);
/* Charset options:
ascii
base64
base64url (Node v14+)
hex
usc2/usc-2/utf16le/utf-16le
utf8/utf-8
binary/latin1 (ISO8859-1, latin1 only in node 6.4.0+)
*/

writeFileSync(path.join(__dirname, "/content/bakugan.txt"),`Here is the result: ${first}, ${second}, ${third}`, { flag:'a'});

/*Flags;

w(default): Opens the file for writing. If the file does not exist it is created. if the file exists, its contents are overwriten before new datat is written

wx: Similar to w but it fails to error if the path exists. This ensures that a new file is created without overwriting an existing one

a: Opens the file for apending. If the file does not exist it is created. if the file exists the new data is appended to the end of the existing content

ax: Similar to a but is fails if the path exists. this ensures that data is only appended to a file if it is newly created

w+: Opens the file for reading and writing. If the file does not exist it is created. If the file exists its contents are over written

a+: Opens a file for reading and appending. If the file does not exist it is created. If the file exists the new data is appended to the end of the existing content

rs+: Opens the file for reading and writing sycronously. this flag should be used with caution as it cna block nodejs event loop
*/
