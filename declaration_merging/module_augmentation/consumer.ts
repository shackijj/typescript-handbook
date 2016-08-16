import { Observable } from "./observable";
import "./map";

let o: Observable<number> = new Observable<number>();
let s: Observable<string>;

o.subscribe(1.23);
o.subscribe(2.1);
s = o.map(x => x.toFixed());