import { encodeUrlParameters } from './Helpers'

export default class UrlNavigator {

	constructor(private baseUrl: string) {
		if (!this.isURL(baseUrl))
			throw Error('The format of the url is invalid');
	}

	addId(id: string | number): UrlNavigator {
		return new UrlNavigator(`${this.baseUrl}/${id.toString()}`);
	}

	addResource(name: string): UrlNavigator {
		return new UrlNavigator(`${this.baseUrl}/${name}`);
	}

	addVerb(verb: string): UrlNavigator {
		return new UrlNavigator(`${this.baseUrl}/${verb}`);
	}

	addFilters(filters: object): UrlNavigator {
		let parameters = encodeUrlParameters(filters);
		return new UrlNavigator(`${this.baseUrl}?${parameters}`);
	}

	toString(): string {
		return this.baseUrl;
	}

	private isURL(string: string): boolean {
		var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
			'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
			'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
			'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
			'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
			'(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
		return pattern.test(string);
	}
}
