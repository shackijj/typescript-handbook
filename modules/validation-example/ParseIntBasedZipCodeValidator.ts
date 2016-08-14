import { StringValidator } from "./validation";

export class ParseIntBasedZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}
// Re-export
export {ZipCodeValidator as RegExpBasedCodeValidator} from "./ZipCodeValidator";