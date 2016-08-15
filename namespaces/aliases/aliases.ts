namespace Shapes {
    export namespace Polygons {
        export class Triangle {}
        export class Square {}
    }
}

// Authors recommends this way

import polygons = Shapes.Polygons;
let sqImport = new polygons.Square();

/* 
It works too.
In output file we have the same code for all sq* varables
*/
let polygonsLet = Shapes.Polygons;
var polygonsVar = Shapes.Polygons;


let sqLet = new polygonsLet.Square();
let sqVar = new polygonsVar.Square();

console.log(sqImport instanceof Shapes.Polygons.Square);
console.log(sqLet instanceof Shapes.Polygons.Square);
console.log(sqVar instanceof Shapes.Polygons.Square);