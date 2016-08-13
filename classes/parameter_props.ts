class Animal {
    constructor(private name: string) {
        // TS assigns name prop for us
    }
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}`);
    }
}

let animal = new Animal("Bear");
animal.move(4); // Bear moved 4