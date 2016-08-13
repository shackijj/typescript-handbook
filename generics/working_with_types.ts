/*

Error. T doesnt have length memeber

function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);
    return arg;
}

*/

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length); // Ok. Arrays have length
    return arg;
}

function loggingIdentityAlt<T>(arg: Array<T>): Array<T> {
    console.log(arg.length); // Ok. Arrays have length
    return arg;
}

let arrOfNum = loggingIdentity<string>(["asd", "asd"]);