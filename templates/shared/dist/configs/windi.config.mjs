// node_modules/windicss/helpers/index.mjs
import require$$0, { createRequire } from "module";
import require$$1 from "path";
var lib = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.addHook = addHook;
  var _module = _interopRequireDefault(require$$0);
  var _path = _interopRequireDefault(require$$1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  const nodeModulesRegex = /^(?:.*[\\/])?node_modules(?:[\\/].*)?$/;
  const Module = module.constructor.length > 1 ? module.constructor : _module.default;
  const HOOK_RETURNED_NOTHING_ERROR_MESSAGE = "[Pirates] A hook returned a non-string, or nothing at all! This is a violation of intergalactic law!\n--------------------\nIf you have no idea what this means or what Pirates is, let me explain: Pirates is a module that makes is easy to implement require hooks. One of the require hooks you're using uses it. One of these require hooks didn't return anything from it's handler, so we don't know what to do. You might want to debug this.";
  function shouldCompile(filename, exts, matcher, ignoreNodeModules) {
    if (typeof filename !== "string") {
      return false;
    }
    if (exts.indexOf(_path.default.extname(filename)) === -1) {
      return false;
    }
    const resolvedFilename = _path.default.resolve(filename);
    if (ignoreNodeModules && nodeModulesRegex.test(resolvedFilename)) {
      return false;
    }
    if (matcher && typeof matcher === "function") {
      return !!matcher(resolvedFilename);
    }
    return true;
  }
  function addHook(hook, opts = {}) {
    let reverted = false;
    const loaders = [];
    const oldLoaders = [];
    let exts;
    const originalJSLoader = Module._extensions[".js"];
    const matcher = opts.matcher || null;
    const ignoreNodeModules = opts.ignoreNodeModules !== false;
    exts = opts.extensions || opts.exts || opts.extension || opts.ext || [".js"];
    if (!Array.isArray(exts)) {
      exts = [exts];
    }
    exts.forEach((ext) => {
      if (typeof ext !== "string") {
        throw new TypeError(`Invalid Extension: ${ext}`);
      }
      const oldLoader = Module._extensions[ext] || originalJSLoader;
      oldLoaders[ext] = Module._extensions[ext];
      loaders[ext] = Module._extensions[ext] = function newLoader(mod, filename) {
        let compile;
        if (!reverted) {
          if (shouldCompile(filename, exts, matcher, ignoreNodeModules)) {
            compile = mod._compile;
            mod._compile = function _compile(code) {
              mod._compile = compile;
              const newCode = hook(code, filename);
              if (typeof newCode !== "string") {
                throw new Error(HOOK_RETURNED_NOTHING_ERROR_MESSAGE);
              }
              return mod._compile(newCode, filename);
            };
          }
        }
        oldLoader(mod, filename);
      };
    });
    return function revert() {
      if (reverted)
        return;
      reverted = true;
      exts.forEach((ext) => {
        if (Module._extensions[ext] === loaders[ext]) {
          Module._extensions[ext] = oldLoaders[ext];
        }
      });
    };
  }
})(lib, lib.exports);
function defineConfig(config) {
  return config;
}

// configs/windi.config.ts
var windi_config_default = defineConfig({
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite"
      }
    }
  }
});
export {
  windi_config_default as default
};
