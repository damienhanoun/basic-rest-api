var BaseResource = (function () {
    function BaseResource(baseUrl, name) {
        this.url = baseUrl + '/' + name;
        this.requestInit = new RequestInitGenerator();
    }
    BaseResource.prototype.id = function (id) {
        return new ResourceNavigator(this.url + '/' + id);
    };
    BaseResource.prototype.getAll = function (headerExtension) {
        return fetch(this.url, this.requestInit.get(headerExtension))
            .then(this.handleError);
    };
    BaseResource.prototype.get = function (id, headerExtension) {
        return fetch(this.url + '/' + id.toString(), this.requestInit.get(headerExtension))
            .then(this.handleError);
    };
    BaseResource.prototype.save = function (object, headerExtension) {
        return fetch(this.url + '/' + object.id.toString(), this.requestInit.put(object, headerExtension))
            .then(this.handleErrorWithoutReponse);
    };
    BaseResource.prototype.delete = function (id, headerExtension) {
        return fetch(this.url + '/' + id.toString(), this.requestInit.delete(headerExtension))
            .then(this.handleErrorWithoutReponse);
    };
    BaseResource.prototype.handleError = function (response) {
        if (!response.ok)
            throw Error(response.statusText);
        return response.json();
    };
    BaseResource.prototype.handleErrorWithoutReponse = function (response) {
        if (!response.ok)
            throw Error(response.statusText);
        return Promise.resolve();
    };
    return BaseResource;
}());
