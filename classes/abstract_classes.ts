abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}

abstract class Department {
    constructor(public name: string) {}

    printName(): void {
        console.log(`Department name ${this.name}`);
    }

    abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing");
    }

    printMeeting(): void {
        console.log("The accounting department meets each Mondat at 10am.");
    }

    generateReports(): void {
        console.log("Generating accountin reports...");
    }
}

let department: Department;
// Can't create instance of abstract class
// department = new Department();

department = new AccountingDepartment();
department.printName();
department.printMeeting();
// Error, generateReport() is not member of abstract class
// department.generateReport();