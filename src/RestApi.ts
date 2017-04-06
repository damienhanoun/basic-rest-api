class RestApi extends ResourceNavigator {

	constructor(private baseUrl: string) {
		super(baseUrl+'/api');
	}

}
