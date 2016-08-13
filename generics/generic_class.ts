class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();

// ERROR zeroValue must be number's type
// myGenericNumber.zeroValue = "s";
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y };

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) {return x + y};