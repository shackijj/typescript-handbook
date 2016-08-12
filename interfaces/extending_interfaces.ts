interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};

square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

// ERR lem not part of interface
//square.lem = 1;