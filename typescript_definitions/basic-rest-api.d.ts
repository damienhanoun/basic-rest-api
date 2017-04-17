interface Entity {
    id: number|string
}

declare class ResourceNavigator {
  resource<T extends Entity>(resourceName: string) : Resource<T>;
  fileResource<T extends Entity>(resourceName: string) : FileResource<T>;
}

declare class RestApi extends ResourceNavigator {
	constructor(baseUrl: string);
}

declare class BaseResource<T extends Entity> {
  id(id: number | string): ResourceNavigator;
  getAll(headerExtension? : Object): Promise<T[]>;
  get(id:number|string, headerExtension? : Object): Promise<T>;
  save(object:T, headerExtension? : Object):Promise<T>;
  delete(id:number|string, headerExtension? : Object):Promise<void>;
}

declare class Resource<T extends Entity> extends BaseResource<T> {
    create(object:T, headerExtension? : Object):Promise<T>;
}

declare class FileResource<T extends Entity> extends BaseResource<T> {
    upload(file: File, after: () => void, headerExtension? : Object): Promise<T>;
    download(id: string | number, headerExtension? : Object): Promise<Blob>;
}
