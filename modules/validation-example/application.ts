import { ZipCodeValidator } from "./ZipCodeValidator";
import * as validators from "./ParseIntBasedZipCodeValidator";
import validate from "./StaticZipCodeValidator";

let myValidator = new ZipCodeValidator();
let strings = ["Hello", "1231", "09727"];

strings.forEach(s => {
    console.log(`"${s}" ${validate(s) ? " matches" : " doesnt match"}.`);
})