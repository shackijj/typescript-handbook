interface StringArray {
    // index         returned value
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Blob"];

let myString = myArray[0];

class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

/*

ERR. 

In such cases we must expect one returned type
interface NotOk {
    [x: number]: Animal;
    [x: string]: Dog;
}

*/
interface Okey {
    [x: number]: Animal;
    [x: string]: Animal;
}