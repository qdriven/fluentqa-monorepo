var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// utils/index.ts
var utils_exports = {};
__export(utils_exports, {
  fibonacci: () => fibonacci,
  foo: () => foo,
  sum: () => sum
});
module.exports = __toCommonJS(utils_exports);
var foo = 2;
var sum = (a, b) => a + b;
var fibonacci = (n) => {
  if (n <= 1)
    return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  fibonacci,
  foo,
  sum
});
