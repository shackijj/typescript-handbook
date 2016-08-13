interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;

// Ok. Because structures is similar { name: string; }
p = new Person();

let x: Named;
let y = { name: "Susan", location: "NY"};

// It's OK
x = y;
// ERR Object literal may only specify known properties, and 'location' does not exist in type 'Named'.
// So we have to assing object to some variable to be evaluated bt TS
x = { name: "Susan", location: "NY"};

// Ok too
function greed(n: Named) {
    console.log("Hello, " + n.name);
}