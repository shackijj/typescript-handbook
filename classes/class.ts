class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet () {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");


/*
    TS is transform simple class in a module
    which contain a construtor and prototype methods
    and return the constructor.

    On each child class:
    
    1. All owned props of parent are copied to child. 
    2. Prototype of child is set to a new instance of parent class (through another constructor) 
    
    Childs are modules too.
*/

/* 
    Methods and props are public by default like in >= PHP4.3!!!
*/

class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
// Horse is a child of Animal. No type errors
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);