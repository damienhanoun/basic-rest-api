var RestApi =
/******/ (function(modules) { // webpackBootstrap
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

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(8), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Resource_1, FileResource_1) {
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
            return new FileResource_1.default(this.url.addResource(resourceName));
        };
        return ResourceNavigator;
    }());
    exports.default = ResourceNavigator;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, BaseResource_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FileResource = (function (_super) {
        __extends(FileResource, _super);
        function FileResource(url) {
            return _super.call(this, url) || this;
        }
        FileResource.prototype.upload = function (file, after, headerExtension) {
            if (after === void 0) { after = function () { }; }
            if (headerExtension === void 0) { headerExtension = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var url, requestInit, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = this.url.addVerb('upload').toString();
                            requestInit = this.requestInit.postFile(file, headerExtension);
                            return [4 /*yield*/, fetch(url, requestInit)];
                        case 1:
                            response = _a.sent();
                            after();
                            return [2 /*return*/, this.handleError(response)];
                    }
                });
            });
        };
        FileResource.prototype.download = function (id, headerExtension) {
            if (headerExtension === void 0) { headerExtension = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var url, requestInit, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = this.url.addId(id).addVerb('download').toString();
                            requestInit = this.requestInit.getFile(headerExtension);
                            return [4 /*yield*/, fetch(url, requestInit)];
                        case 1:
                            response = _a.sent();
                            if (!response.ok || response.status == 204)
                                return [2 /*return*/, Promise.reject(response.statusText)];
                            return [2 /*return*/, response.blob()];
                    }
                });
            });
        };
        return FileResource;
    }(BaseResource_1.default));
    exports.default = FileResource;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 8 */
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, BaseResource_1) {
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjMwODc4ZjRiNzRmY2Q5YjBlN2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9SZXNvdXJjZU5hdmlnYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzb3VyY2VzL0Jhc2VSZXNvdXJjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9VcmxOYXZpZ2F0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc3RBcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4Y2VwdGlvbnMvSW52YWxpZFVybEV4Y2VwdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9IZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL1JlcXVlc3RJbml0R2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvRmlsZVJlc291cmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvUmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztnRUNoRUE7QUFDQTtBQUNBLGtEQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsc0JBQXNCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFBQSIsImZpbGUiOiJiYXNpYy1yZXN0LWFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjMwODc4ZjRiNzRmY2Q5YjBlN2QiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL1Jlc291cmNlXCIsIFwiLi9GaWxlUmVzb3VyY2VcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBSZXNvdXJjZV8xLCBGaWxlUmVzb3VyY2VfMSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiAgICB2YXIgUmVzb3VyY2VOYXZpZ2F0b3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIFJlc291cmNlTmF2aWdhdG9yKHVybCkge1xyXG4gICAgICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgICAgICB9XHJcbiAgICAgICAgUmVzb3VyY2VOYXZpZ2F0b3IucHJvdG90eXBlLnJlc291cmNlID0gZnVuY3Rpb24gKHJlc291cmNlTmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlc291cmNlXzEuZGVmYXVsdCh0aGlzLnVybC5hZGRSZXNvdXJjZShyZXNvdXJjZU5hbWUpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFJlc291cmNlTmF2aWdhdG9yLnByb3RvdHlwZS5maWxlUmVzb3VyY2UgPSBmdW5jdGlvbiAocmVzb3VyY2VOYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmlsZVJlc291cmNlXzEuZGVmYXVsdCh0aGlzLnVybC5hZGRSZXNvdXJjZShyZXNvdXJjZU5hbWUpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBSZXNvdXJjZU5hdmlnYXRvcjtcclxuICAgIH0oKSk7XHJcbiAgICBleHBvcnRzLmRlZmF1bHQgPSBSZXNvdXJjZU5hdmlnYXRvcjtcclxufSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Jlc291cmNlcy9SZXNvdXJjZU5hdmlnYXRvci50c1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSB5W29wWzBdICYgMiA/IFwicmV0dXJuXCIgOiBvcFswXSA/IFwidGhyb3dcIiA6IFwibmV4dFwiXSkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbMCwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuLi9oZWxwZXJzL1JlcXVlc3RJbml0R2VuZXJhdG9yXCIsIFwiLi9SZXNvdXJjZU5hdmlnYXRvclwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIFJlcXVlc3RJbml0R2VuZXJhdG9yXzEsIFJlc291cmNlTmF2aWdhdG9yXzEpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4gICAgdmFyIEJhc2VSZXNvdXJjZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gQmFzZVJlc291cmNlKHVybCkge1xyXG4gICAgICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0SW5pdCA9IG5ldyBSZXF1ZXN0SW5pdEdlbmVyYXRvcl8xLmRlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQmFzZVJlc291cmNlLnByb3RvdHlwZS5pZCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlc291cmNlTmF2aWdhdG9yXzEuZGVmYXVsdCh0aGlzLnVybC5hZGRJZChpZCkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgQmFzZVJlc291cmNlLnByb3RvdHlwZS5nZXRBbGwgPSBmdW5jdGlvbiAoaGVhZGVyRXh0ZW5zaW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChoZWFkZXJFeHRlbnNpb24gPT09IHZvaWQgMCkgeyBoZWFkZXJFeHRlbnNpb24gPSB7fTsgfVxyXG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsLCByZXF1ZXN0SW5pdCwgcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSB0aGlzLnVybC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEluaXQgPSB0aGlzLnJlcXVlc3RJbml0LmdldChoZWFkZXJFeHRlbnNpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2godXJsLCByZXF1ZXN0SW5pdCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLmhhbmRsZUVycm9yRm9yR2V0QWxsKHJlc3BvbnNlKV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgQmFzZVJlc291cmNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoaWQsIGhlYWRlckV4dGVuc2lvbikge1xyXG4gICAgICAgICAgICBpZiAoaGVhZGVyRXh0ZW5zaW9uID09PSB2b2lkIDApIHsgaGVhZGVyRXh0ZW5zaW9uID0ge307IH1cclxuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHVybCwgcmVxdWVzdEluaXQsIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdGhpcy51cmwuYWRkSWQoaWQpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0SW5pdCA9IHRoaXMucmVxdWVzdEluaXQuZ2V0KGhlYWRlckV4dGVuc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaCh1cmwsIHJlcXVlc3RJbml0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMuaGFuZGxlRXJyb3IocmVzcG9uc2UpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBCYXNlUmVzb3VyY2UucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbiAob2JqZWN0LCBoZWFkZXJFeHRlbnNpb24pIHtcclxuICAgICAgICAgICAgaWYgKGhlYWRlckV4dGVuc2lvbiA9PT0gdm9pZCAwKSB7IGhlYWRlckV4dGVuc2lvbiA9IHt9OyB9XHJcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB1cmwsIHJlcXVlc3RJbml0LCByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHRoaXMudXJsLmFkZElkKG9iamVjdC5pZCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RJbml0ID0gdGhpcy5yZXF1ZXN0SW5pdC5wdXQob2JqZWN0LCBoZWFkZXJFeHRlbnNpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2godXJsLCByZXF1ZXN0SW5pdCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLmhhbmRsZUVycm9yKHJlc3BvbnNlKV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgQmFzZVJlc291cmNlLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoaWQsIGhlYWRlckV4dGVuc2lvbikge1xyXG4gICAgICAgICAgICBpZiAoaGVhZGVyRXh0ZW5zaW9uID09PSB2b2lkIDApIHsgaGVhZGVyRXh0ZW5zaW9uID0ge307IH1cclxuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHVybCwgcmVxdWVzdEluaXQsIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdGhpcy51cmwuYWRkSWQoaWQpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0SW5pdCA9IHRoaXMucmVxdWVzdEluaXQuZGVsZXRlKGhlYWRlckV4dGVuc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaCh1cmwsIHJlcXVlc3RJbml0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMuaGFuZGxlRXJyb3JXaXRob3V0UmVwb25zZShyZXNwb25zZSldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIEJhc2VSZXNvdXJjZS5wcm90b3R5cGUuaGFuZGxlRXJyb3JGb3JHZXRBbGwgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdmFyIHByb21pc2U7XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gUHJvbWlzZS5yZWplY3QocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgQmFzZVJlc291cmNlLnByb3RvdHlwZS5oYW5kbGVFcnJvciA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICB2YXIgcHJvbWlzZTtcclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vayB8fCByZXNwb25zZS5zdGF0dXMgPT0gMjA0KVxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVqZWN0KHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIEJhc2VSZXNvdXJjZS5wcm90b3R5cGUuaGFuZGxlRXJyb3JXaXRob3V0UmVwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rIHx8IHJlc3BvbnNlLnN0YXR1cyA9PSAyMDQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBCYXNlUmVzb3VyY2U7XHJcbiAgICB9KCkpO1xyXG4gICAgZXhwb3J0cy5kZWZhdWx0ID0gQmFzZVJlc291cmNlO1xyXG59KTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL0Jhc2VSZXNvdXJjZS50c1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuLi9leGNlcHRpb25zL0ludmFsaWRVcmxFeGNlcHRpb25cIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBJbnZhbGlkVXJsRXhjZXB0aW9uXzEpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4gICAgdmFyIFVybE5hdmlnYXRvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gVXJsTmF2aWdhdG9yKGJhc2VVcmwpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybDtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVVJMKGJhc2VVcmwpKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEludmFsaWRVcmxFeGNlcHRpb25fMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFVybE5hdmlnYXRvci5wcm90b3R5cGUuYWRkSWQgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVcmxOYXZpZ2F0b3IodGhpcy5iYXNlVXJsICsgXCIvXCIgKyBpZC50b1N0cmluZygpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFVybE5hdmlnYXRvci5wcm90b3R5cGUuYWRkUmVzb3VyY2UgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFVybE5hdmlnYXRvcih0aGlzLmJhc2VVcmwgKyBcIi9cIiArIG5hbWUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgVXJsTmF2aWdhdG9yLnByb3RvdHlwZS5hZGRWZXJiID0gZnVuY3Rpb24gKHZlcmIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVcmxOYXZpZ2F0b3IodGhpcy5iYXNlVXJsICsgXCIvXCIgKyB2ZXJiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFVybE5hdmlnYXRvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJhc2VVcmw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBVcmxOYXZpZ2F0b3IucHJvdG90eXBlLmlzVVJMID0gZnVuY3Rpb24gKHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoJ14oaHR0cHM/OlxcXFwvXFxcXC8pPycgK1xyXG4gICAgICAgICAgICAgICAgJygoKFthLXpcXFxcZF0oW2EtelxcXFxkLV0qW2EtelxcXFxkXSkqKVxcXFwuPykrW2Etel17Mix9fCcgK1xyXG4gICAgICAgICAgICAgICAgJygoXFxcXGR7MSwzfVxcXFwuKXszfVxcXFxkezEsM30pKScgK1xyXG4gICAgICAgICAgICAgICAgJyhcXFxcOlxcXFxkKyk/KFxcXFwvWy1hLXpcXFxcZCVfLn4rXSopKicgK1xyXG4gICAgICAgICAgICAgICAgJyhcXFxcP1s7JmEtelxcXFxkJV8ufis9LV0qKT8nICtcclxuICAgICAgICAgICAgICAgICcoXFxcXCNbLWEtelxcXFxkX10qKT8kJywgJ2knKTsgLy8gZnJhZ21lbnQgbG9jYXRvclxyXG4gICAgICAgICAgICByZXR1cm4gcGF0dGVybi50ZXN0KHN0cmluZyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gVXJsTmF2aWdhdG9yO1xyXG4gICAgfSgpKTtcclxuICAgIGV4cG9ydHMuZGVmYXVsdCA9IFVybE5hdmlnYXRvcjtcclxufSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hlbHBlcnMvVXJsTmF2aWdhdG9yLnRzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL3Jlc291cmNlcy9SZXNvdXJjZU5hdmlnYXRvclwiLCBcIi4vaGVscGVycy9VcmxOYXZpZ2F0b3JcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBSZXNvdXJjZU5hdmlnYXRvcl8xLCBVcmxOYXZpZ2F0b3JfMSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgUmVzdEFwaSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICAgICAgX19leHRlbmRzKFJlc3RBcGksIF9zdXBlcik7XHJcbiAgICAgICAgZnVuY3Rpb24gUmVzdEFwaShiYXNlVXJsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBuZXcgVXJsTmF2aWdhdG9yXzEuZGVmYXVsdChiYXNlVXJsKSkgfHwgdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFJlc3RBcGk7XHJcbiAgICB9KFJlc291cmNlTmF2aWdhdG9yXzEuZGVmYXVsdCkpO1xyXG4gICAgcmV0dXJuIFJlc3RBcGk7XHJcbn0pO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9SZXN0QXBpLnRzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuICAgIHZhciBJbnZhbGlkVXJsRXhjZXB0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgICAgICBfX2V4dGVuZHMoSW52YWxpZFVybEV4Y2VwdGlvbiwgX3N1cGVyKTtcclxuICAgICAgICBmdW5jdGlvbiBJbnZhbGlkVXJsRXhjZXB0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgXCJUaGUgdXJsIGZvcm1hdCBpcyBpbnZhbGlkXCIpIHx8IHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBJbnZhbGlkVXJsRXhjZXB0aW9uO1xyXG4gICAgfShFcnJvcikpO1xyXG4gICAgZXhwb3J0cy5kZWZhdWx0ID0gSW52YWxpZFVybEV4Y2VwdGlvbjtcclxufSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2V4Y2VwdGlvbnMvSW52YWxpZFVybEV4Y2VwdGlvbi50c1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuICAgIGZ1bmN0aW9uIGV4dGVuZChkZXN0aW5hdGlvbiwgc291cmNlKSB7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSlcclxuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IHNvdXJjZVtrZXldO1xyXG4gICAgfVxyXG4gICAgZXhwb3J0cy5kZWZhdWx0ID0gZXh0ZW5kO1xyXG59KTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGVscGVycy9IZWxwZXJzLnRzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIi4vSGVscGVyc1wiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIEhlbHBlcnNfMSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiAgICB2YXIgUmVxdWVzdEluaXRHZW5lcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIFJlcXVlc3RJbml0R2VuZXJhdG9yKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBSZXF1ZXN0SW5pdEdlbmVyYXRvci5wcm90b3R5cGUuZ2V0SnNvbkhlYWRlciA9IGZ1bmN0aW9uIChoZWFkZXJFeHRlbnNpb24pIHtcclxuICAgICAgICAgICAgdmFyIGhlYWRlciA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9O1xyXG4gICAgICAgICAgICBIZWxwZXJzXzEuZGVmYXVsdChoZWFkZXJFeHRlbnNpb24sIGhlYWRlcik7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgSGVhZGVycyhoZWFkZXIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgUmVxdWVzdEluaXRHZW5lcmF0b3IucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChoZWFkZXJFeHRlbnNpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmdldEpzb25IZWFkZXIoaGVhZGVyRXh0ZW5zaW9uKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgUmVxdWVzdEluaXRHZW5lcmF0b3IucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uIChvYmplY3QsIGhlYWRlckV4dGVuc2lvbikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SnNvbkhlYWRlcihoZWFkZXJFeHRlbnNpb24pLFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqZWN0KVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgUmVxdWVzdEluaXRHZW5lcmF0b3IucHJvdG90eXBlLnBvc3QgPSBmdW5jdGlvbiAob2JqZWN0LCBoZWFkZXJFeHRlbnNpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogdGhpcy5nZXRKc29uSGVhZGVyKGhlYWRlckV4dGVuc2lvbiksXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYmplY3QpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBSZXF1ZXN0SW5pdEdlbmVyYXRvci5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGhlYWRlckV4dGVuc2lvbikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SnNvbkhlYWRlcihoZWFkZXJFeHRlbnNpb24pXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBSZXF1ZXN0SW5pdEdlbmVyYXRvci5wcm90b3R5cGUucG9zdEZpbGUgPSBmdW5jdGlvbiAoZmlsZSwgaGVhZGVyRXh0ZW5zaW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKGhlYWRlckV4dGVuc2lvbiksXHJcbiAgICAgICAgICAgICAgICBib2R5OiBkYXRhXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBSZXF1ZXN0SW5pdEdlbmVyYXRvci5wcm90b3R5cGUuZ2V0RmlsZSA9IGZ1bmN0aW9uIChoZWFkZXJFeHRlbnNpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyhoZWFkZXJFeHRlbnNpb24pXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gUmVxdWVzdEluaXRHZW5lcmF0b3I7XHJcbiAgICB9KCkpO1xyXG4gICAgZXhwb3J0cy5kZWZhdWx0ID0gUmVxdWVzdEluaXRHZW5lcmF0b3I7XHJcbn0pO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oZWxwZXJzL1JlcXVlc3RJbml0R2VuZXJhdG9yLnRzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSB5W29wWzBdICYgMiA/IFwicmV0dXJuXCIgOiBvcFswXSA/IFwidGhyb3dcIiA6IFwibmV4dFwiXSkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbMCwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL0Jhc2VSZXNvdXJjZVwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIEJhc2VSZXNvdXJjZV8xKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuICAgIHZhciBGaWxlUmVzb3VyY2UgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgICAgIF9fZXh0ZW5kcyhGaWxlUmVzb3VyY2UsIF9zdXBlcik7XHJcbiAgICAgICAgZnVuY3Rpb24gRmlsZVJlc291cmNlKHVybCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgdXJsKSB8fCB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBGaWxlUmVzb3VyY2UucHJvdG90eXBlLnVwbG9hZCA9IGZ1bmN0aW9uIChmaWxlLCBhZnRlciwgaGVhZGVyRXh0ZW5zaW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChhZnRlciA9PT0gdm9pZCAwKSB7IGFmdGVyID0gZnVuY3Rpb24gKCkgeyB9OyB9XHJcbiAgICAgICAgICAgIGlmIChoZWFkZXJFeHRlbnNpb24gPT09IHZvaWQgMCkgeyBoZWFkZXJFeHRlbnNpb24gPSB7fTsgfVxyXG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsLCByZXF1ZXN0SW5pdCwgcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSB0aGlzLnVybC5hZGRWZXJiKCd1cGxvYWQnKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEluaXQgPSB0aGlzLnJlcXVlc3RJbml0LnBvc3RGaWxlKGZpbGUsIGhlYWRlckV4dGVuc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaCh1cmwsIHJlcXVlc3RJbml0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLmhhbmRsZUVycm9yKHJlc3BvbnNlKV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgRmlsZVJlc291cmNlLnByb3RvdHlwZS5kb3dubG9hZCA9IGZ1bmN0aW9uIChpZCwgaGVhZGVyRXh0ZW5zaW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChoZWFkZXJFeHRlbnNpb24gPT09IHZvaWQgMCkgeyBoZWFkZXJFeHRlbnNpb24gPSB7fTsgfVxyXG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsLCByZXF1ZXN0SW5pdCwgcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSB0aGlzLnVybC5hZGRJZChpZCkuYWRkVmVyYignZG93bmxvYWQnKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEluaXQgPSB0aGlzLnJlcXVlc3RJbml0LmdldEZpbGUoaGVhZGVyRXh0ZW5zaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKHVybCwgcmVxdWVzdEluaXQpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rIHx8IHJlc3BvbnNlLnN0YXR1cyA9PSAyMDQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFByb21pc2UucmVqZWN0KHJlc3BvbnNlLnN0YXR1c1RleHQpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZS5ibG9iKCldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBGaWxlUmVzb3VyY2U7XHJcbiAgICB9KEJhc2VSZXNvdXJjZV8xLmRlZmF1bHQpKTtcclxuICAgIGV4cG9ydHMuZGVmYXVsdCA9IEZpbGVSZXNvdXJjZTtcclxufSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Jlc291cmNlcy9GaWxlUmVzb3VyY2UudHNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IHlbb3BbMF0gJiAyID8gXCJyZXR1cm5cIiA6IG9wWzBdID8gXCJ0aHJvd1wiIDogXCJuZXh0XCJdKSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFswLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbmRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIi4vQmFzZVJlc291cmNlXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgQmFzZVJlc291cmNlXzEpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4gICAgdmFyIFJlc291cmNlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgICAgICBfX2V4dGVuZHMoUmVzb3VyY2UsIF9zdXBlcik7XHJcbiAgICAgICAgZnVuY3Rpb24gUmVzb3VyY2UodXJsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCB1cmwpIHx8IHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFJlc291cmNlLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAob2JqZWN0LCBoZWFkZXJFeHRlbnNpb24pIHtcclxuICAgICAgICAgICAgaWYgKGhlYWRlckV4dGVuc2lvbiA9PT0gdm9pZCAwKSB7IGhlYWRlckV4dGVuc2lvbiA9IHt9OyB9XHJcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB1cmwsIHJlcXVlc3RJbml0LCByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHRoaXMudXJsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0SW5pdCA9IHRoaXMucmVxdWVzdEluaXQucG9zdChvYmplY3QsIGhlYWRlckV4dGVuc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaCh1cmwsIHJlcXVlc3RJbml0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMuaGFuZGxlRXJyb3IocmVzcG9uc2UpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gUmVzb3VyY2U7XHJcbiAgICB9KEJhc2VSZXNvdXJjZV8xLmRlZmF1bHQpKTtcclxuICAgIGV4cG9ydHMuZGVmYXVsdCA9IFJlc291cmNlO1xyXG59KTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL1Jlc291cmNlLnRzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=