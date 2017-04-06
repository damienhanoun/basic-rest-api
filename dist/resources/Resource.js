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
var Resource = (function (_super) {
    __extends(Resource, _super);
    function Resource(baseUrl, name) {
        return _super.call(this, baseUrl, name) || this;
    }
    Resource.prototype.create = function (object, headerExtension) {
        return fetch(this.url, this.requestInit.post(object, headerExtension))
            .then(this.handleError);
    };
    return Resource;
}(BaseResource));
