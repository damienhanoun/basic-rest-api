var RequestInitGenerator = (function () {
    function RequestInitGenerator() {
    }
    RequestInitGenerator.prototype.getHeader = function (headerExtension) {
        var header;
        if (headerExtension == undefined)
            header = new Headers();
        else
            header = new Headers(headerExtension);
        return header;
    };
    RequestInitGenerator.prototype.getJsonHeader = function (headerExtension) {
        var header = { 'Content-Type': 'application/json' };
        if (headerExtension != undefined)
            Helpers.extend(headerExtension, header);
        return this.getHeader(header);
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
            headers: this.getHeader(headerExtension)
        };
    };
    RequestInitGenerator.prototype.postFile = function (file, headerExtension) {
        var data = new FormData();
        data.append('file', file);
        return {
            method: 'POST',
            headers: this.getHeader(headerExtension),
            body: data
        };
    };
    RequestInitGenerator.prototype.getFile = function (headerExtension) {
        return {
            method: 'GET',
            headers: this.getHeader(headerExtension)
        };
    };
    return RequestInitGenerator;
}());
