class ResourceNavigator {

    constructor(private url: string) {}

    resource<T extends Entity>(resourceName: string) {
        return new Resource<T>(this.url, resourceName);
    }

    fileResource<T extends Entity>(resourceName: string) {
        return new FileResource<T>(this.url, resourceName);
    }
}
