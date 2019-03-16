/**
 * Copyright (c) 2019 Teemu Vartiainen
 */
export function dispatchEvent<T>(ctor: new() => T, e: T): void {
    const custom: CustomEvent<T> = new CustomEvent<T>(ctor.name, { detail: e });
    document.dispatchEvent(custom);
}

export function removeEventListener<T>(ctor: new () => T, handler: (e: T) => void): void {
    document.removeEventListener(ctor.name, (e: Event) => { handler((<CustomEvent<T>>e).detail); });
}

export function addEventListener<T>(ctor: new () => T, handler: (e:T) => void): void {
    document.addEventListener(ctor.name, (e: Event) => { handler((<CustomEvent<T>>e).detail); });
}
