// Prop order is not a matter. Object must has just a label of the string type.
interface LabbeledValue {
    label: string;
}

function printLabelFoo(labbeledObj: { label: string } ) {
    console.log(labbeledObj.label);
}

function printLabelBar(labbeledObj: LabbeledValue ) {
    console.log(labbeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Obj"};

printLabelBar(myObj);
printLabelFoo(myObj);

// Optional props

interface SquareConfig {
    color?: string;
    width?: number;
    /*
    [propName: string]: any
    */
}
                                            // Returned type
function createSquare(config: SquareConfig): {color: string; area: number;} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        // Author says that optional props prevent typos. Hm...
        newSquare.color = config.color;
    }

    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mySquare = createSquare({color: "black"});
// ERR. SquareConfig doesn't have colur prop
// let mySquare = createSquare({colur: "black"});

// Workarounds abount compiler errors

let myFooSquare = createSquare({color: "blue", opacity: 0.5} as SquareConfig);
// Alse See line 25.
let squareOptions = { colour: "red", width: 20};
let myBarSquare = createSquare(squareOptions);
// Author says this workaraunds is usefull on a big complex Object and reccomed to avoid them
