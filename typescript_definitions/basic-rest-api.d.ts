interface Entity {
    id: number|string
}

declare class ResourceNavigator {
  constructor(url: string);
  resource<T extends Entity>(resourceName: string);
  fileResource<T extends Entity>(resourceName: string);
}

declare class RestApi extends ResourceNavigator {
	constructor(baseUrl: string);
}

declare class BaseResource<T extends Entity> {
  constructor(baseUrl: string, name: string);
  id(id: number | string);
  getAll(headerExtension? : object): Promise<T[]>;
  get(id:number|string, headerExtension? : object): Promise<T>;
  save(object:T, headerExtension? : object):Promise<T>;
  delete(id:number|string, headerExtension? : object):Promise<any>;
}

declare class Resource<T extends Entity> extends BaseResource<T> {
    constructor(baseUrl: string, name: string);
    create(object:T, headerExtension? : object):Promise<T>;
}

declare class FileResource<T extends Entity> extends BaseResource<T> {
    constructor(baseUrl: string, name: string);
    upload(file: File, after: () => void, headerExtension? : object): Promise<T>;
    download(id: string | number, headerExtension? : object): Promise<Blob>;
}
