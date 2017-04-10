class ResourceNavigator {

    constructor(private url: Url) {}

    resource<T extends Entity>(resourceName: string) {
        return new Resource<T>(this.url.addResource(resourceName));
    }

    fileResource<T extends Entity>(resourceName: string) {
        return new FileResource<T>(this.url.addResource(resourceName));
    }
}
