type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}

type Container<T> = { value: T };

type Tree<T> = {
    value: T,
    left: Tree<T>,
    right: Tree<T>
}


interface Person {
    name: string;
}

type LinkedList<T> = T & { next: LinkedList<T> };

var people: LinkedList<Person>;
var s = people.name;
var s = people.next.name;
var s = people.next.next.name;