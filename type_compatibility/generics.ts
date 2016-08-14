interface Empty<T> {

}

let x: Empty<number>;
let y: Empty<number>;

x = y; // Ok signatures is the same

let z: Empty<string>;

x = z; // Ok too


interface NoEmpty<T> {
    data: T
}

let foo: NoEmpty<number>;
let bar: NoEmpty<string>;

foo = bar;  // Error. TS here act like a non-generic type

let identity = function<T>(x: T): T {
    return x;
}

let reverse = function<U>(y: U): U {
    return y;
}

// Ok. (x: any) => any Matches (y: any) => any
identity = reverse;