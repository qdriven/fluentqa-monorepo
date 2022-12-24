"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsup_1 = require("tsup");
exports.default = (0, tsup_1.defineConfig)({
    entry: ['utils/index.ts', 'types/index.ts', 'configs/*.ts'],
    clean: true,
    dts: true,
    outDir: 'dist',
    format: ['cjs', 'esm']
});
