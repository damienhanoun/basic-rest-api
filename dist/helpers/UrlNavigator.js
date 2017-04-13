define(["require", "exports", "../exceptions/InvalidUrlException"], function (require, exports, InvalidUrlException_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UrlNavigator = (function () {
        function UrlNavigator(baseUrl) {
            this.baseUrl = baseUrl;
            if (!this.isURL(baseUrl))
                throw new InvalidUrlException_1.default();
        }
        UrlNavigator.prototype.addId = function (id) {
            return new UrlNavigator(this.baseUrl + "/" + id.toString());
        };
        UrlNavigator.prototype.addResource = function (name) {
            return new UrlNavigator(this.baseUrl + "/" + name);
        };
        UrlNavigator.prototype.addVerb = function (verb) {
            return new UrlNavigator(this.baseUrl + "/" + verb);
        };
        UrlNavigator.prototype.toString = function () {
            return this.baseUrl;
        };
        UrlNavigator.prototype.isURL = function (string) {
            var pattern = new RegExp('^(https?:\\/\\/)?' +
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' +
                '((\\d{1,3}\\.){3}\\d{1,3}))' +
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                '(\\?[;&a-z\\d%_.~+=-]*)?' +
                '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
            return pattern.test(string);
        };
        return UrlNavigator;
    }());
    exports.default = UrlNavigator;
});
