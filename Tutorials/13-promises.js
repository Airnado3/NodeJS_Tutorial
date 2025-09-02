/*
A promise in javaScript is an object that represnets teh eventual result of an asyncronous operation. it acts like a placeholder for a value that will be available now, later, or never

A promise can be in ne of three states:

***Pending -> the initial state, operation not completed yet

***Fulfilled (resolved) -> the operation completed successfully, resulting in a value

***Rejected -> the operation failed and retuned a reason (usually an error).

once a promise is either fulfilled or rejected, it becomes settled and cannot change state again.

*/
const path = require("path");
const {readFile, writeFile} = require("fs");
const myPromise = new Promise((resolve, reject) => {

    //list of Async tasks
    let sucess = true;
    if(sucess){
        resolve("Task completed successfully")
    }else{
        reject("Something went wrong")
    }
});

let ip = "127.0.0.5";
const newPromise = new Promise((resolve, reject) => {
    //Async operations

    if(ip === "127.0.0.1" || ip === "127.0.0.5"){
        resolve("Success")
    }else{
        reject("Failed mission no respawn")
    }
})

console.log(newPromise)


// let actualFile = path.join(__dirname, '/content/first.txt')
// console.log(actualFile)

// //Now lets make some function with the promise
// function processData(data){
//     return new Promise((resolve, reject)=>{
//         //Here you can alter o modify the data
//         setTimeout(()=>{
//             resolve(data.toUpperCase())//Converts the data to uppercase string function
//         }, 500)// 0.5 second delay
//     })
// }

// function saveData(data){
//     return new Promise((resolve, reject)=>{
//         //Save localy or to a cloud
//         setTimeout(() => {
//             resolve(`Data saved: ${data}`)
//         }, 500)
//     })
// }

// //usage
// function readFilePromise(pathway){
//     return new Promise((resolve, reject) => {
//         readFile(pathway, 'utf8', (err,data) => {
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

/*
You can handle the outcome using .then(), .catch(), and .finally()
*/
myPromise
    .then(result => {
        console.log(result); // runs if resolved
    })
    .catch(error => {
        console.error(error); // runs if rejected
    })
    .finally(() => {
        console.log("Promise settled"); // will alwasy run last
    });

/* The pros of Promisies
*** Async programming: promises help manage tasks that take time like network requests or reading files without blocking the rest of the code
*** Chaining operations: You can link multiple .then() calls so each one waits for the previous to complete
*** Error handling: .catch() make error handling easier

async function getData() {
    try{
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
    }catch(error){
        console.error('Error fetching data:', error);
    }
}

*/

