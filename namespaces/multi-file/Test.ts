/*

Build into one file:
tsc --outFile multifile_build_into_one_file/sample.js multi-file/Test.ts

Build many files
tsc --outDir multifile_build_many_files/ multi-file/*
*/

/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

let strings = ["Hello", "93123", "101"];

let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP_CODE"] = new Validation.ZipCodeValidator();
validators["LETTERS_ONLY"] = new Validation.LetterOnlyValidator();

for (let s of strings) {
    for (let name in validators) {
        console.log("\"" + s + "\" " + (validators[name].isAcceptable(s) ? " matches " :
        " doesn't matches ") + name);
    }
}

