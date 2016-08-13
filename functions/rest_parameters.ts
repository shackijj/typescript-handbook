function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Jo", "Jo", "Mo", "Ko");

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;