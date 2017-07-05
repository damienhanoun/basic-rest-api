import {} from 'jasmine'
import RestApi from '../src/BasicRestApi'

describe('RestApi', () => {

	it('should throw an error if url is invalid', () => {
		let urlWithoutOneSlash = 'https:/localhost/api';
		expect(() => { new RestApi(urlWithoutOneSlash) })
			.toThrowError('The format of the url is invalid');
	});

});
