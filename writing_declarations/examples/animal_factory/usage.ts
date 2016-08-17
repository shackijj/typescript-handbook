/// <reference path="./animal_factory.d.ts" />

animalFactory.create("dog");
animalFactory.create("giraffe", { name: "ronald" });
animalFactory.create("panda", { name: "bobby", height: 400 });
// Wrong. Name should be present in options
animalFactory.create("deer", { height: 500 });