declare namespace animalFactory {

    interface Animal {
        
    }

    interface AnimalOptions {
        name: string;
        height?: number;
        weight?: number;
    }

    function create(name: string, animalOptions?: AnimalOptions): Animal;
}