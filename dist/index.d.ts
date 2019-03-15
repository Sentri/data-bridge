/**
 * Copyright (c) 2019 Teemu Vartiainen
 */
export declare function dispatchEvent<T>(ctor: new () => T, e: T): void;
export declare function removeEventListener<T>(ctor: new () => T, handler: (e: T) => void): void;
export declare function addEventListener<T>(ctor: new () => T, handler: (e: T) => void): void;
