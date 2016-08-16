import { Observable } from "./observable";

declare module "./observable" {
    interface Observable<T> {
        map<U>(f: (x: T) => U): Observable<U>
    }
}



Observable.prototype.map = function(f) {
    let observable = new Observable();
    this.subscribers.forEach((item) => {
        observable.subscribe( f(item) );
    });

    return observable; 
};

/* 
We can also write on module level!!! (i.e. all functions and classes are in a one file.)
declare global {
    interface Observable<T> {
        map<U>(f: (x: T) => U): Observable<U>
    }
}
*/