class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
    // state is inherited
}

// Subtype of SelectableControl
class Button extends Control {
    select() {}
}

// Subtype of SelectableControl
class TextBox extends Control {
    select() {}
}

// Not Subtype of SelectableControl because doesn't have select()
class Input extends Control {

}
// Not Subtype of SelectableControl because not inherit from Control
class Select {
    select() {}
}