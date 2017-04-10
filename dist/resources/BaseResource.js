var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var BaseResource = (function () {
    function BaseResource(url) {
        this.url = url;
        this.requestInit = new RequestInitGenerator();
    }
    BaseResource.prototype.id = function (id) {
        return new ResourceNavigator(this.url.addId(id));
    };
    BaseResource.prototype.getAll = function (headerExtension) {
        if (headerExtension === void 0) { headerExtension = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var url, requestInit, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.url.toString();
                        requestInit = this.requestInit.get(headerExtension);
                        return [4 /*yield*/, fetch(url, requestInit)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.handleError(response)];
                }
            });
        });
    };
    BaseResource.prototype.get = function (id, headerExtension) {
        if (headerExtension === void 0) { headerExtension = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var url, requestInit, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.url.addId(id).toString();
                        requestInit = this.requestInit.get(headerExtension);
                        return [4 /*yield*/, fetch(url, requestInit)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.handleError(response)];
                }
            });
        });
    };
    BaseResource.prototype.save = function (object, headerExtension) {
        if (headerExtension === void 0) { headerExtension = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var url, requestInit, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.url.addId(object.id).toString();
                        requestInit = this.requestInit.put(object, headerExtension);
                        return [4 /*yield*/, fetch(url, requestInit)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.handleError(response)];
                }
            });
        });
    };
    BaseResource.prototype.delete = function (id, headerExtension) {
        if (headerExtension === void 0) { headerExtension = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var url, requestInit, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.url.addId(id).toString();
                        requestInit = this.requestInit.delete(headerExtension);
                        return [4 /*yield*/, fetch(url, requestInit)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.handleErrorWithoutReponse(response)];
                }
            });
        });
    };
    BaseResource.prototype.handleError = function (response) {
        var promise;
        if (!response.ok || response.status == 204)
            promise = Promise.reject(response.statusText);
        else
            promise = response.json();
        return promise;
    };
    BaseResource.prototype.handleErrorWithoutReponse = function (response) {
        if (!response.ok || response.status == 204)
            return Promise.reject(response.statusText);
        return Promise.resolve();
    };
    return BaseResource;
}());
