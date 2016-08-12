(function() {
    
    interface ClockInterface {
        currentTime: Date;
        setTime(d: Date);
    }

    class Clock implements ClockInterface {
        currentTime: Date;

        setTime(d: Date) {
            this.currentTime = d;
        }

        constructor(h: number, m: number) {}
    }

}());

(function() {
    interface ClockConstructor {
        new (h: number, m: number); 
    }

/*
    ERR:
    Class 'Clock' incorrectly implements interface 'ClockConstructor'.
    Type 'Clock' provides no match for the signature 'new (h: number, m: number): any'

    REASON:

    Only instance side of class is checked.
    Constructor of class is not instance side  
*/

    class Clock implements ClockConstructor {
        constructor(h: number, m: number) {}
    }
}());


/* In other words Class must have
    constructor which takes number and number
    and implements ClockInterface
*/
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick();
}

// ctor means constructor here
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log("beep beep");
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 2, 17);
let analog = createClock(AnalogClock, 23, 25);