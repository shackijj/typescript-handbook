interface Counter {
    // Curly brackets mean function
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    // <Counter> Assign hybrid type Counter to couner variable
    // It this case Counter is a function with interval prop and and reset method
    let counter = <Counter>function(start: number) {};
    counter.interval = 123;
    counter.reset = function() {};
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;