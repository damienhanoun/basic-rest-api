var Helpers = (function () {
    function Helpers() {
    }
    Helpers.extend = function (destination, source) {
        for (var key in source)
            destination[key] = source[key];
    };
    return Helpers;
}());
