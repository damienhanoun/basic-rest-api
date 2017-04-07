class FileResource<T extends Entity> extends BaseResource<T> {

    constructor(baseUrl: string, name: string) {
      super(baseUrl, name);
    }

    upload(file: File, after: () => void = () => { }, headerExtension? : Object): Promise<T> {
      return fetch(this.url + '/upload', this.requestInit.postFile(file, headerExtension))
        .then((response) => {
            after();
            return response;
        })
        .then(this.handleError);
    }

    download(id: string | number, headerExtension? : Object): Promise<Blob> {
      return fetch(this.url + '/' + id.toString() + '/download', this.requestInit.getFile(headerExtension))
        .then((response: Response) => {
            if (!response.ok)
                throw Error(response.statusText);
            return response.blob();
        });
    }
}
