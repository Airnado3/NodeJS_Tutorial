/*
We are going to make a custom emitter class needed if you want to custom extend from classes other than the main class or any custom feature you would like added. This class will handle the emitting and handles events that create and instance of this class
*/

const eventEmitter = require('events')

const customEmitter = new eventEmitter()

/*
The on and emit methods are to keep track of the order. You can also use additional argument/parameters  and th ebuilt in function/module can utilize it.
*/
class TemperatureSensor extends eventEmitter{
    constructor(){
        // A super class is parent class that others classes can extend from(inherit from). it defines the properties and methods that can be reused by child classes (called subclasses). This avoids rewriting code
        super()
        this.temperature = 95
    }
}

/*
In JS a class is a blueprint for creating objects. It defines the properties(data) and the methods(functions) that the object created from it will have 

Think of it like the design for a car: the class is teh design and the cars you build from it are the actual object.
*/

// class Car{
//     constructor(make, model, year){
//         this.make = make
//         this.model = model
//         this.year = year
//         //The constructor is a special method that runs when you create a new object
//     }

//     //methods
//     startEngine(){
//         console.log(`${this.make} ${this.model} engine started.`)
//     }
//     drive(){
//         console.log(`${this.make} ${this.model} is in drive.`)
//     }
//     reverse(){
//         console.log(`${this.make} ${this.model} is in reverse.`)
//     }
//     neutral(){
//         console.log(`${this.make} ${this.model} is in neutral.`)
//     }
// }
// // The properties are : make, model, and year
// // The methods are : startEngine, drive, reverse, and neutral

// const monty_car = new Car("Jeep", "Renegade", 2016);
// const ryder_car = new Car("Ford", "Bronco", 1996);

// monty_car.startEngine()
// monty_car.drive()
/*
Class = blueprint or template

Instance = actual object created from the class

You can make many instances from one class, each with unique property values

Methods in a class are shared across instances (efficient memory usage)
*/

