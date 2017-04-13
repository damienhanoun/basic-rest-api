define(["require", "exports", "./Resource", "./Resource"], function (require, exports, Resource_1, Resource_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ResourceNavigator = (function () {
        function ResourceNavigator(url) {
            this.url = url;
        }
        ResourceNavigator.prototype.resource = function (resourceName) {
            return new Resource_1.default(this.url.addResource(resourceName));
        };
        ResourceNavigator.prototype.fileResource = function (resourceName) {
            return new Resource_2.default(this.url.addResource(resourceName));
        };
        return ResourceNavigator;
    }());
    exports.default = ResourceNavigator;
});
