enum Directions {
    Up = 1,
    Down,
    Left,
    Right
}

let Up = Directions.Up;
let nameOfUp = Directions[Directions.Up];

console.log(nameOfUp);

// Const enums can be computed
// Generated code is much simpler by the way
const enum Colors {
    Red = 1,
    Green = Red + 2
}

console.log(Colors.Green);

// We can redeclare enums

declare const enum Colors {
    Somewhere = 5
}

// ERROR We need to initialize it meanually
console.log(Colors.Somewhere);