function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;
let myIdentityAnotherName: <U>(arg: U) => U = identity;
let myIdentityLiteral: { <T>(arg: T): T } = identity;

interface GenericIdentifyFn {
    <T>(arg: T): T;
}

let myIdentityInterfaced: GenericIdentifyFn = identity;

interface GenericIdentifyFnSpecified<T> {
    (arg: T): T;
}

let myIdentityInterfacedAndSpecified: GenericIdentifyFnSpecified<number> = identity;