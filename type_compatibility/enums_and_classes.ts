enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };


let foo = Status.Ready;
// ERR because different enums is incompatible
foo = Color.Green;

let bar: number;

bar = Status.Ready;
bar = Color.Green;

// In classes only instance memebers are checked

class A {
    letter: string;
    constructor (name: string, size: number) {

    }
}

class B {
    letter: string;
    constructor (name: string) {
        
    }
}

class Word {
    private letter: string;
    constructor (name: string) {
        
    }
}

let a: A;
let b: B;
let word: Word;

a = b;
b = a;
// ERR Private and protected members checked and must be the same
a = word;
word = a;