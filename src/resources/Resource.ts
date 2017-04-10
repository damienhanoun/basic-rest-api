class Resource<T extends Entity> extends BaseResource<T> {

    constructor(url: Url) {
      super(url);
    }

    async create(object:T, headerExtension : Object = {}):Promise<T> {
      let url = this.url.toString();
      let requestInit = this.requestInit.post(object, headerExtension);
      let response = await fetch(url, requestInit);
      return this.handleError<T>(response);
    }

}
