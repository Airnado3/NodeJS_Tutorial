const os = require('os');

//information about the current users devices
const user = os.userInfo();
console.log(user);

//Method retuen the system uptine in seconds
function covertTime(seconds){
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `Hours:${hours}: Minutes:${minutes}: Seconds:${secs}:`;
}
console.log(covertTime(os.uptime()));

//Convert to hours min and seconds

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    device: os.platform(), //OS: linux, win-32, macosx, .. ect
    arch: os.arch(), //archetecture: x64, x86, arm4, ...ect
}

console.log(currentOS);

