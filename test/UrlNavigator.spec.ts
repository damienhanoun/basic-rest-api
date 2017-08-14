import {} from 'jasmine'
import UrlNavigator from '../src/helpers/UrlNavigator'

describe('UrlNavigator', () => {

	it('should throw an error if url is invalid', () => {
		let urlWithoutOneSlash = 'https:/localhost/api';
		expect(() => { new UrlNavigator(urlWithoutOneSlash) })
			.toThrowError('The format of the url is invalid');
	});

	it('should add the string id to url', () => {
		let urlNavigator = new UrlNavigator('https://localhost/api/resource');
		expect(urlNavigator.addId('1').toString())
			.toBe('https://localhost/api/resource/1');
	});

	it('should add the integer id to url', () => {
		let urlNavigator = new UrlNavigator('https://localhost/api/resource');
		expect(urlNavigator.addId(1).toString())
			.toBe('https://localhost/api/resource/1');
	});

	it('should add the verb to url', () => {
		let urlNavigator = new UrlNavigator('https://localhost/api/resource');
		expect(urlNavigator.addVerb('download').toString())
			.toBe('https://localhost/api/resource/download');
	});

	it('should add the resource to url', () => {
		let urlNavigator = new UrlNavigator('https://localhost/api');
		expect(urlNavigator.addResource('resource').toString())
			.toBe('https://localhost/api/resource');
	});

	it('should add filters to url', () => {
		let urlNavigator = new UrlNavigator('https://localhost/api/resource');
		let filters = { id: 1, name: 'patrick' };
		expect(urlNavigator.addFilters(filters).toString())
			.toBe('https://localhost/api/resource?id=1&name=patrick');
	});

});
