namespace Animals {
    export class Zebra { }
}

namespace Animals {
    export interface Legged { numberOfLegs: number; }
    export class Dog { }
}

/* Result

namespace Animals {
    export interface Legged { numberOfLegs: number; }

    export class Dog { }
    export class Zebra { }
}

*/

// Only exported members are merged

namespace Insects {
    let haveWings = true;

    export function insectsHaveWings() {
        return haveWings;
    }
}

namespace Insects {
    export function doInsectsHaveWings() {
        return haveWings; // Error. haveWings is not exported
    }
}