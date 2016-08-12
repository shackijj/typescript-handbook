for (var i = 0; i < 10; i++) {
    setTimeout((function(i) {
        console.log(i); 
    }(i)));
}

function f(input: boolean) {
    let a = 100;

    if (input) {
        let b = a + 1;
        return b;
    }

    // b doesn't exists here
   //  return b;
}

try {
    throw "oh, no!";
} catch(err) {
    console.log("Oh, well");
}

// err doesn't exists here

/*
Ilegal
a++;
let a;
*/

function g(condition, x) {
    // let x = 5 Illegal

    if (condition) {
        let x = 5; // Ok
    }

    return x;
}

g(false, 0) === 0;
g(true, 0) === 5;

// Block-scoped variable capturing

function theCity() {
    let getCity;

    if (true) {
        let city = "Seatle";
        getCity = function() {
            // It works, like closure
            return city;
        }
    }

    return getCity();
}

console.log(theCity());

for (let i; i < 10; i++) {
    setTimeout(function() { console.log(i); })
}

// Object destruction with renaming

let {a: newName1, b: newName2} = {a: 1, b: 2};

newName2 === 2; // true

function keepWholeObj(wholeObj: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObj;
    return b;
}

keepWholeObj({a: "Kokojambo"}) === 1001; // true

// Function declarations

type C = {a: string, b?: number};
function func({a, b}: C): void {

}

function func1({a, b = 0} = {a: ""}): void {
    //
}

func1({a: "y"});
func1(); // a= ""; b = 0
func1({});