define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function extend(destination, source) {
        for (var key in source)
            destination[key] = source[key];
    }
    exports.default = extend;
});
