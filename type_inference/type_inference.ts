let x = 3;
/*
ERRORS because TS inference x as number
x = {};
x = "as";
*/


// In this case y is number
let y = [0, 1, null];

class Animal {}

class Rhino extends Animal {}

class Elephant extends Animal {}

class Snake extends Animal {}


// By default TS chose {} 
let zooWrong = [new Rhino(), new Elephant(), new Snake()];

// We have to declare ancestor manually
let zooCorrect: Animal[] = [new Rhino(), new Elephant(), new Snake()];

window.onmousedown = function(event) {
    // console.log(event.btn); ERR Event is inferenced and considered props known by TS
    console.log(event.target); // It's ok!

};

function createZoo(): Animal[] {
    return [new Rhino(), new Element(), new Snake()];
}

// myZoo is Animal[]
let myZoo = createZoo();