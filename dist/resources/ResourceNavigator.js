var ResourceNavigator = (function () {
    function ResourceNavigator(url) {
        this.url = url;
    }
    ResourceNavigator.prototype.resource = function (resourceName) {
        return new Resource(this.url, resourceName);
    };
    ResourceNavigator.prototype.fileResource = function (resourceName) {
        return new FileResource(this.url, resourceName);
    };
    return ResourceNavigator;
}());
