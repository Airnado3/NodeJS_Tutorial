const os = require('os');

//information about the current users devices
const user = os.userInfo();
console.log(user);

//Method retuen the system uptine in seconds
function covertTime(seconds){
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hours}:${minutes}:${secs}`;
}
console.log(covertTime(os.uptime()));