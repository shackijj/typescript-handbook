function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

// ERR too few params
let rc1 = buildName("Bob");
// Too many params
let rc2 = buildName("Bob", "Mob", "S");

let rc3 = buildName("Bob", "Sinclair");

// Optional

function buildNameOptional(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else   
        return firstName;
}

let rs1 = buildNameOptional("Boo");

// Too many params
let rs2 = buildNameOptional("Boo", "Zoo", "Goo");

let rs3 = buildNameOptional("Boo", "Zoo");


function buildNameDefault(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

buildNameDefault("Bob") === "Bob Smith";
buildNameDefault("Bob", undefined) === "Bob Smith";
buildNameDefault("Bob", "Smith") === "Bob Smith";

// Too many params
let fooRc = buildNameDefault("Bob", "Smith", "Jr.");

function buildNameDefaultFoo(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}

buildNameDefaultFoo(undefined, "Smith") === "Will Smith";
buildNameDefaultFoo("Boo", "Zoo") === "Boo Zoo";
// Too few arguments
let barRs1 = buildNameDefaultFoo("Bob");
// Too many arguments
let barRs2 = buildNameDefaultFoo("Bob", "Mob", "Jr.");
