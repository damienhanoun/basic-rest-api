import ResourceNavigator from './resources/ResourceNavigator'
import UrlNavigator from './helpers/UrlNavigator'

export default class RestApi extends ResourceNavigator {

	constructor(baseUrl: string) {
		super(new UrlNavigator(baseUrl));
	}

}
