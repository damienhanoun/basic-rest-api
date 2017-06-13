// Definitions by: Damien <https://github.com/diviniter>

interface Entity {
	id: number | string
}

declare class ResourceNavigator {
	resource<T extends Entity>(resourceName: string): Resource<T>;
	fileResource<T extends Entity>(resourceName: string): FileResource<T>;
}

declare class BasicRestApi extends ResourceNavigator {
	constructor(baseUrl: string);
}

declare class BaseResource<T extends Entity> {
	id(id: number | string): ResourceNavigator;
	getAll(headerExtension?: object): Promise<T[]>;
	get(id: number | string, headerExtension?: object): Promise<T>;
	put(theObject: T, headerExtension?: object): Promise<T>;
	delete(id: number | string, headerExtension?: object): Promise<void>;
}

declare class Resource<T extends Entity> extends BaseResource<T> {
	post(theObject: T, headerExtension?: object): Promise<T>;
}

declare class FileResource<T extends Entity> extends BaseResource<T> {
	upload(file: File, after: () => void, headerExtension?: object): Promise<T>;
	download(id: string | number, headerExtension?: object): Promise<Blob>;
}

declare class RestErrorResponse {
	status: number
	statusText: string
	message: string
}

export = BasicRestApi;
export as namespace BasicRestApi;
