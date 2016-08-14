// Works only with --target ES6 option !!!

let sym1 = Symbol();
let sym2 = Symbol("12");

let sym3 = Symbol("key");
let sym4 = Symbol("key");

sym2 === sym3 // false

let obj = {
    [sym1]: "value"
};

console.log(obj[sym1]);

const getClassNameSymbol = Symbol();

class C {
    [getClassNameSymbol] () {
        return "C";
    }
}

let c = new C();

c[getClassNameSymbol]() === "C";