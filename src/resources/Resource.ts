import BaseResource from './BaseResource'
import UrlNavigator from '../helpers/UrlNavigator'

export default class Resource<T extends Entity> extends BaseResource<T> {

	constructor(url: UrlNavigator) {
		super(url);
	}

	async post(theObject: T, headerExtension: object = {}): Promise<T> {
		let url = this.url.toString();
		let requestInit = this.requestInit.post(theObject, headerExtension);
		let response = await fetch(url, requestInit);
		return this.handleError<T>(response);
	}

}
