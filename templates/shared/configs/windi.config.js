"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("windicss/helpers");
exports.default = (0, helpers_1.defineConfig)({
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 20s linear infinite'
            }
        }
    }
});
