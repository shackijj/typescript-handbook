class Greeter {
    static standartGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return `Hello, ${this.greeting}`;
        } else {
            return Greeter.standartGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standartGreeting = "Hey there!";

// New constructor
let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());


// Using a class as an interface

class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
