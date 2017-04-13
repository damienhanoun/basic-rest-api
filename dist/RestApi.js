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
define(["require", "exports", "./resources/ResourceNavigator", "./helpers/UrlNavigator"], function (require, exports, ResourceNavigator_1, UrlNavigator_1) {
    "use strict";
    var RestApi = (function (_super) {
        __extends(RestApi, _super);
        function RestApi(baseUrl) {
            return _super.call(this, new UrlNavigator_1.default(baseUrl)) || this;
        }
        return RestApi;
    }(ResourceNavigator_1.default));
    return RestApi;
});
