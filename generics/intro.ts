function identityNum(arg: number): number {
    return arg;
}

// Here we loose information about type of input and ouput. Generics handle this.
function identityAny(arg: any): any {
    return arg;
}

function identityGeneric<T>(arg: T): T {
    return arg;
}

// Ok. Output is string
let output1 = identityGeneric<string>("MyString");

// Complier automaticaly resolve type of output
let output2 = identityGeneric("string");