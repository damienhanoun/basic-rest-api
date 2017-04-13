define(["require", "exports", "../src/RestApi"], function (require, exports, RestApi_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe("Creating the main RestApi", function () {
        it("throw an exception if parameter is not a url", function () {
            var invalidUrl = "http:/api/test/";
            expect(function () { new RestApi_1.RestApi(invalidUrl); }).toThrowErrorOfType('InvalidUrlException');
        });
    });
});
