// Boolean
let isDone: boolean = false;

// Number

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String
let color: string = "blue";
color = "red";

// Templates also supported

let age: number = 18;
let fullName: string = "Sarah J. Parker";
let sentence: string = `Hello! I'm ${fullName}.
I'm ${age + 1} years old.`;

// Arrays

let firstList: number[] = [1, 2, 3];
let secondList: Array<number> = [1, 2, 3];

// Tuples

let tuple: [string, number];
tuple = ["hello", 10];

// tuple = [10, "hello"]; Error
// tuple = [undefined, null]; No error. Hmm...


// console.log(tuple[1].substring(0, 2));
// Error. Property 'substring' does not exist on type 'number'.

tuple[3] = "world"; // Could be string or number
// tuple[4] = true; ERROR not a string or number

// ENUM - it's like C enumeration.

enum Color { Red = 1, Green, Blue };
let c: Color = Color.Green;
let colorName: string = Color[2];
colorName === "Green";

// ANY - Could be any type

let notSure: any = 4;
notSure = "Maybe...";
notSure = false;

// notSure.ifItExists(); runtime error
// notSure.toFixed(); runtime error

// in contrast  
// let prettySure: Object = 4;
// prettySure.toFixed(); compilation error 

// VOID 

function warnUser(): void {
    alert("BOO!");
}

let firstUnusable: void = null;
let secondUnusable: void = undefined;


// TYPE ASSERTIONS

// 1st form
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// 2nd form
let anotherStrLength: number = (someValue as string).length;