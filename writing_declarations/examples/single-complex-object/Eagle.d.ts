interface Eagle {
    new(name: string): Eagle;
    (name: string): Eagle;
    
    kind: string;
    fly(): void;
}

declare var Eagle: Eagle;

export = Eagle;