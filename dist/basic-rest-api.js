define("basic-rest-api", [], function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Resource_1, Resource_2) {
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
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, BaseResource_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Resource = (function (_super) {
        __extends(Resource, _super);
        function Resource(url) {
            return _super.call(this, url) || this;
        }
        Resource.prototype.create = function (object, headerExtension) {
            if (headerExtension === void 0) { headerExtension = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var url, requestInit, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = this.url.toString();
                            requestInit = this.requestInit.post(object, headerExtension);
                            return [4 /*yield*/, fetch(url, requestInit)];
                        case 1:
                            response = _a.sent();
                            return [2 /*return*/, this.handleError(response)];
                    }
                });
            });
        };
        return Resource;
    }(BaseResource_1.default));
    exports.default = Resource;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, InvalidUrlException_1) {
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
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ResourceNavigator_1, UrlNavigator_1) {
    "use strict";
    var RestApi = (function (_super) {
        __extends(RestApi, _super);
        function RestApi(baseUrl) {
            return _super.call(this, new UrlNavigator_1.default(baseUrl)) || this;
        }
        return RestApi;
    }(ResourceNavigator_1.default));
    return RestApi;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InvalidUrlException = (function (_super) {
        __extends(InvalidUrlException, _super);
        function InvalidUrlException() {
            return _super.call(this, "The url format is invalid") || this;
        }
        return InvalidUrlException;
    }(Error));
    exports.default = InvalidUrlException;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function extend(destination, source) {
        for (var key in source)
            destination[key] = source[key];
    }
    exports.default = extend;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Helpers_1) {
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
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, RequestInitGenerator_1, ResourceNavigator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseResource = (function () {
        function BaseResource(url) {
            this.url = url;
            this.requestInit = new RequestInitGenerator_1.default();
        }
        BaseResource.prototype.id = function (id) {
            return new ResourceNavigator_1.default(this.url.addId(id));
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
                            return [2 /*return*/, this.handleErrorForGetAll(response)];
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
        BaseResource.prototype.handleErrorForGetAll = function (response) {
            var promise;
            if (!response.ok)
                promise = Promise.reject(response.statusText);
            else
                promise = response.json();
            return promise;
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
    exports.default = BaseResource;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ])});;