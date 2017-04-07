class BaseResource<T extends Entity> {
  protected url: string;
  protected requestInit : RequestInitGenerator;

  constructor(baseUrl: string, name: string){
    this.url = baseUrl + '/' + name;
    this.requestInit = new RequestInitGenerator();
  }

  id(id: number | string) {
    return new ResourceNavigator(this.url + '/' + id);
  }

  getAll(headerExtension? : Object): Promise<T[]> {
    return fetch(this.url, this.requestInit.get(headerExtension))
      .then(this.handleError);
  }

  get(id:number|string, headerExtension? : Object): Promise<T> {
    return fetch(this.url + '/' + id.toString(), this.requestInit.get(headerExtension))
      .then(this.handleError);
  }

  save(object:T, headerExtension? : Object):Promise<TypeError> {
    return fetch(this.url + '/' + object.id.toString(), this.requestInit.put(object, headerExtension))
      .then(this.handleErrorWithoutReponse);
  }

  delete(id:number|string, headerExtension? : Object):Promise<any> {
    return fetch(this.url + '/' + id.toString(), this.requestInit.delete(headerExtension))
      .then(this.handleErrorWithoutReponse);
  }

  protected handleError(response: Response) : Object {
    if (!response.ok)
        throw Error(response.statusText);
    return response.json();
  }

  protected handleErrorWithoutReponse(response: Response) : Object  {
    if (!response.ok)
        throw Error(response.statusText);
    return Promise.resolve();
  }
}
