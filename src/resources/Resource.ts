class Resource<T extends Entity> extends BaseResource<T> {

    constructor(baseUrl: string, name: string) {
      super(baseUrl, name);
    }

    create(object:T, headerExtension? : Object):Promise<T> {
      return fetch(this.url, this.requestInit.post(object, headerExtension))
        .then(this.handleError);
    }

}
