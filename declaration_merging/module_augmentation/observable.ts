export class Observable<T> {
    subscribers: Array<T>;

    constructor() {
        this.subscribers = [];
    }

    subscribe(thing: T) {
        this.subscribers.push(thing);
    }

    unsubscribe(thing: T) {
        this.subscribers = this.subscribers.filter((item) => item !== thing);
    }

    notify(callback: Function, context: Object = {}) {
        this.subscribers.forEach((item) => callback.call(context, item));
    }
}