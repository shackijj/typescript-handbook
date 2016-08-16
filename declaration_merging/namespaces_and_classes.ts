class Album {
    label: Album.AlbumLabel;
}

namespace Album {
    export class AlbumLabel {}
}

function buildLabel(name: string): string {
    return buildLabel.prefix + name + buildLabel.suffix;
}

namespace buildLabel {
    export let suffix = "";
    export let prefix = "Hello, ";
}

alert(buildLabel("Sam Smith"));


enum Color {
    red = 1,
    green = 2,
    blue = 4
}

namespace Color {
    export function mixColor(colorName: string) {
        if (colorName == "yellow") {
            return Color.red + Color.green;
        } else if (colorName == "white") {
            return Color.red + Color.green + Color.blue;
        }
        // And so on...
    }
}

// Ok
Color.mixColor("white");