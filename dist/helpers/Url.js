var Url = (function () {
    function Url(baseUrl) {
        this.baseUrl = baseUrl;
    }
    Url.prototype.addId = function (id) {
        return new Url(this.baseUrl + "/" + id.toString());
    };
    Url.prototype.addResource = function (name) {
        return new Url(this.baseUrl + "/" + name);
    };
    Url.prototype.addVerb = function (verb) {
        return new Url(this.baseUrl + "/" + verb);
    };
    Url.prototype.toString = function () {
        return this.baseUrl;
    };
    return Url;
}());
