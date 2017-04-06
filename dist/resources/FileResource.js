var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FileResource = (function (_super) {
    __extends(FileResource, _super);
    function FileResource(baseUrl, name) {
        return _super.call(this, baseUrl, name) || this;
    }
    FileResource.prototype.upload = function (file, after, headerExtension) {
        if (after === void 0) { after = function () { }; }
        return fetch(this.url + '/upload', this.requestInit.postFile(file, headerExtension))
            .then(function (response) {
            after();
            return response;
        })
            .then(this.handleError);
    };
    FileResource.prototype.download = function (id, headerExtension) {
        return fetch(this.url + '/' + id.toString() + '/download', this.requestInit.getFile(headerExtension))
            .then(function (response) {
            if (!response.ok)
                throw Error(response.statusText);
            return response.blob();
        });
    };
    return FileResource;
}(BaseResource));
