// BEFORE function padLeft(value: string, padding: any) {
function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    // TS use that check as type guard
    if (typeof padding === "string") {
        return padding + value;
    }

    throw new Error(`Expected string or number, got ${padding}`);
}

// No error with first implementation 
let indentedString = padLeft("Hello", true);

interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    let pet = {
        layEggs: function() {},
        swim: function() {}
    };

    return pet;
}

let pet = getSmallPet();
// ERR only common props are allowed to use
pet.fly();
// Ok
pet.layEggs();

// To check what we have in pet use
if ((<Fish>pet).swim) {
    console.log("It's a fish");
    (<Fish>pet).swim();
} else {
    (<Bird>pet).fly();
}

// Custom type guard

function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

// Both calls are correct
if (isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}
