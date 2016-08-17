// Anonymosly typed variable

declare var MyPoint: { x: number; y: number };

// Iterface-typed var
// This type of declaring is more extensible
interface SomePoint { x: number; y: number };

// We can merge


interface SomePoint { z: number };

let point: SomePoint;
point.z = 4;