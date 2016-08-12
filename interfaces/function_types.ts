interface SearchFunc {
    (source: string, subString: string): boolean;
}

// Actually it defines could we assign func to variable.
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    if (result === -1) {
        return false;
    } else {
        return true;
    }
};

// Names of args is not important
let myFooSearch: SearchFunc;
myFooSearch = function(src: string, sub: string) {
    let result = src.search(sub);
    if (result === -1) {
        return false;
    } else {
        return true;
    }
};

// We can define function args without types

let myBarSearch: SearchFunc;
myBarSearch = function(src, sub) {
    let rc = src.search(sub);
    if (rc === -1) {
        return false;
    } else {
        return true;
    }
};