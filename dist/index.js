"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (c) 2019 Teemu Vartiainen
 */
function dispatchEvent(ctor, e) {
    const custom = new CustomEvent(ctor.name, { detail: e });
    document.dispatchEvent(custom);
}
exports.dispatchEvent = dispatchEvent;
function removeEventListener(ctor, handler) {
    document.removeEventListener(ctor.name, (e) => { handler(e.detail); });
}
exports.removeEventListener = removeEventListener;
function addEventListener(ctor, handler) {
    document.addEventListener(ctor.name, (e) => { handler(e.detail); });
}
exports.addEventListener = addEventListener;
//# sourceMappingURL=index.js.map