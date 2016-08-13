let passcode = "secret passcode";

// TS1056: Accessors are only available when targeting ECMAScript 5 and higher.

class Employee {
    private _fullName: string;

    // TS checks what we return
    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        } else {
            console.log("Unauthorized update");
        }
    }
}