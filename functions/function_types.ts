function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number {
    return x + y;
}

let myFullAdd: (x: number, y: number) => number =
    function (x: number, y: number): number {return x + y;}

let myFullAddFoo: (baseValue: number, increment: number) => number =
    function (x: number, y: number): number {return x + y;}


// Inffering the types
let myFullAddBar: (baseValue: number, increment: number) => number =
    function (x, y) { return x + y; }