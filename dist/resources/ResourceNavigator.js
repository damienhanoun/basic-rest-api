var ResourceNavigator = (function () {
    function ResourceNavigator(url) {
        this.url = url;
    }
    ResourceNavigator.prototype.resource = function (resourceName) {
        return new Resource(this.url.addResource(resourceName));
    };
    ResourceNavigator.prototype.fileResource = function (resourceName) {
        return new FileResource(this.url.addResource(resourceName));
    };
    return ResourceNavigator;
}());
