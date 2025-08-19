//CommonJs, every file is a module (by default)
//Modules - Encapsulate code ( only share the minimum amount of info, properties, and methods)

const name = require('./04-name');
const messsage = require('./05-utils');
const data = require('./06-alternative-flavor');
require('./07-mind-grenade');

//names
console.log(name.Shakira);
console.log(name.Pitbull);
//utils
message("Jose")
//data
console.log(data.items[0]);
console.log(data.marriedPerson);

