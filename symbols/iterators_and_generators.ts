let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry);
}

// For..in VS. For..of

let list = [4, 5, 6];

for(let i in list) {
    console.log(i); // 0, 1, 2
}

for(let i of list) {
    console.log(i); // 4, 5 ,6
}

var set = new Set(["Cat", "Dog", "Hamster"]);
set["species"] = "mammals";

for (let pet in set) {
    console.log(pet); // species
}

for (let pet of set) {
    console.log(pet); // Cat, Dog, Hamster
}
