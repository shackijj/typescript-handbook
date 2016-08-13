let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x;
// ERROR. x can't have second parameter
// x = y;

let items = [1, 2, 3];

// We don't have to write in such way
items.forEach((item, index, array) => console.log(item));
// It's correct too
items.forEach((item) => alert(item));


let foo = () => ({name: "Alice"});
let bar = () => ({name: "Alice", location: "Seattle"});

foo = bar;
// ERR because bar() lacks a location prop
// bar = foo;

// Function Parameter Bivariance

enum EventType { Mouse, Keyboard }

interface Event { timestamp: number; }
interface MouseEvent extends Event { x: number; y: number }
interface KeyEvent extends Event { keyCode: number }

function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
}

// Unsound, but useful and common
listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + "," + e.y));

// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + "," + (<MouseEvent>e).y));
listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + "," + e.y)));

// Still disallowed (clear error). Type safety enforced for wholly incompatible types
listenEvent(EventType.Mouse, (e: number) => console.log(e));