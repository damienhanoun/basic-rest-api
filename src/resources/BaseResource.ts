import UrlNavigator from '../helpers/UrlNavigator'
import RequestInitGenerator from '../helpers/RequestInitGenerator'
import ResourceNavigator from './ResourceNavigator'

export default class BaseResource<T extends Entity> {
  protected requestInit : RequestInitGenerator;

  constructor(protected url: UrlNavigator){
    this.requestInit = new RequestInitGenerator();
  }

  id(id: number | string) {
    return new ResourceNavigator(this.url.addId(id));
  }

  async getAll(headerExtension : Object = {}): Promise<T[]> {
    let url = this.url.toString();
    let requestInit = this.requestInit.get(headerExtension);
    let response = await fetch(url, requestInit);
    return this.handleErrorForGetAll(response);
  }

  async get(id:number|string, headerExtension : Object = {}): Promise<T> {
    let url = this.url.addId(id).toString();
    let requestInit = this.requestInit.get(headerExtension);
    let response = await fetch(url, requestInit);
    return this.handleError<T>(response);
  }

  async put(object:T, headerExtension : Object = {}):Promise<T> {
    let url = this.url.addId(object.id).toString();
    let requestInit = this.requestInit.put(object, headerExtension);
    let response = await fetch(url, requestInit);
    return this.handleError<T>(response);
  }

  async delete(id:number|string, headerExtension : Object = {}):Promise<any> {
    let url = this.url.addId(id).toString();
    let requestInit = this.requestInit.delete(headerExtension);
    let response = await fetch(url, requestInit);
    return this.handleErrorWithoutReponse(response);
  }

  protected handleErrorForGetAll(response: Response) : Promise<T[]> {
    let promise : Promise<T[]>;

    if (!response.ok && response.status !== 204)
        promise = Promise.reject(response.statusText);
    else if (response.status === 204)
      promise = Promise.resolve([]);
    else
      promise = response.json();

     return promise;
  }

  protected handleError<U>(response: Response) : Promise<U> {
    let promise : Promise<U>;

    if (!response.ok || response.status === 204)
        promise = Promise.reject(response.statusText);
    else
      promise = response.json();

     return promise;
  }

  protected handleErrorWithoutReponse(response: Response) : Promise<void>  {
    if (!response.ok || response.status == 204)
        return Promise.reject(response.statusText);
    return Promise.resolve();
  }

}
