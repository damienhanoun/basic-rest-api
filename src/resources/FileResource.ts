import BaseResource from './BaseResource'
import UrlNavigator from '../helpers/UrlNavigator'

export default class FileResource<T extends Entity> extends BaseResource<T> {

    constructor(url: UrlNavigator) {
      super(url);
    }

    async upload(file: File, after: () => void = () => { }, headerExtension : Object = {}): Promise<T> {
      let url = this.url.addVerb('upload').toString();
      let requestInit = this.requestInit.postFile(file, headerExtension);
      let response = await fetch(url, requestInit);
      after();
      return this.handleError<T>(response);
    }

    async download(id: string | number, headerExtension : Object = {}): Promise<Blob> {
      let url = this.url.addId(id).addVerb('download').toString();
      let requestInit = this.requestInit.getFile(headerExtension);
      let response = await fetch(url, requestInit);
      if (!response.ok  || response.status == 204)
          return Promise.reject(response.statusText);
      return response.blob();
    }
}
