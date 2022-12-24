"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibonacci = exports.sum = exports.foo = void 0;
exports.foo = 2;
const sum = (a, b) => a + b;
exports.sum = sum;
const fibonacci = (n) => {
    if (n <= 1)
        return n;
    return (0, exports.fibonacci)(n - 1) + (0, exports.fibonacci)(n - 2);
};
exports.fibonacci = fibonacci;
