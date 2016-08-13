class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

// ERROR because name is private prop
// new Animal("Cat").name;

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
// ERROR private name is declared in different places
// for public props it's okay and TS thinks that classes are compatible.
// animal = employee;