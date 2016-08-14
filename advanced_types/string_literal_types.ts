type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {

        }
        else if (easing === "ease-out") {

        }
        else if (easing === "ease-in-out") {

        }
        else {

        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// Error
button.animate(0, 100, "blah");

// String literal types are usefull in overloads
// TODO Make it works
function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
function createElement(tagName: string): Element {
    switch(tagName) {
        case "img":
            return document.createElement("img");
        case "input":
            return document.createElement("input");
        case "element":
            return document.createElement("div");
    }
}