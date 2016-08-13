interface Lengtwise {
    length: number;
}

// Constraint in this case is that arg must have .length prop 
function logginIdentity<T extends Lengtwise>(arg: T): T {
    // No errors here
    console.log(arg.length);
    return arg;
}

logginIdentity(3); // Number doesn't have a .length prop
logginIdentity({length: 10, value: 3}); // It's OK


// Using Type Parameters in Generic Constraints
// We want to copy values (!!!) of props from source to target.
function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
        target[id] = source[id];
    }

    return target;
}

let x = { a: 1, b: 2, c: 3 };

copyFields(x, { b: 10, c: 20 });
// Thereis no Q param in T.
copyFields(x, {Q: 20});

// Using Class Types in Generics
// Example of abstract factory method
function create<T>(c: { new(): T; }): T {
    return new c();
}

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function findKeeper<A extends Animal, K> (a: {new(): A;
    prototype: {keeper: K}}): K {
    return a.prototype.keeper; // Wow! We still have prototype.
}

findKeeper(Lion).nametag; // typecheck.