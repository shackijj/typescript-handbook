class A {
    static st: string;
    inst: number;
    constructor(m: any) {}
}

// Decomposed

/*

    - Decomposed class can't be extended
    - We need make up new sensible names
    + Static and instance could be merged later

*/

interface B_static {
    new(m: any): B_instance;
    st: string;
}

interface B_instance {
    inst: number;
}


declare var B: B_static;