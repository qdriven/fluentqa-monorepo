"use strict";
/// <reference types="vitest" />
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
exports.default = (0, vite_1.defineConfig)({
    test: {
        setupFiles: './test/setup.ts',
        include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}', '**/test.ts'],
    },
});
