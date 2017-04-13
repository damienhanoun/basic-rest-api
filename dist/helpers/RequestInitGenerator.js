define(["require", "exports", "./Helpers"], function (require, exports, Helpers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RequestInitGenerator = (function () {
        function RequestInitGenerator() {
        }
        RequestInitGenerator.prototype.getJsonHeader = function (headerExtension) {
            var header = { 'Content-Type': 'application/json' };
            Helpers_1.default(headerExtension, header);
            return new Headers(header);
        };
        RequestInitGenerator.prototype.get = function (headerExtension) {
            return {
                method: 'GET',
                headers: this.getJsonHeader(headerExtension)
            };
        };
        RequestInitGenerator.prototype.put = function (object, headerExtension) {
            return {
                method: 'PUT',
                headers: this.getJsonHeader(headerExtension),
                body: JSON.stringify(object)
            };
        };
        RequestInitGenerator.prototype.post = function (object, headerExtension) {
            return {
                method: 'POST',
                headers: this.getJsonHeader(headerExtension),
                body: JSON.stringify(object)
            };
        };
        RequestInitGenerator.prototype.delete = function (headerExtension) {
            return {
                method: 'DELETE',
                headers: this.getJsonHeader(headerExtension)
            };
        };
        RequestInitGenerator.prototype.postFile = function (file, headerExtension) {
            var data = new FormData();
            data.append('file', file);
            return {
                method: 'POST',
                headers: new Headers(headerExtension),
                body: data
            };
        };
        RequestInitGenerator.prototype.getFile = function (headerExtension) {
            return {
                method: 'GET',
                headers: new Headers(headerExtension)
            };
        };
        return RequestInitGenerator;
    }());
    exports.default = RequestInitGenerator;
});
