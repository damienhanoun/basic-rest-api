import {} from 'jasmine'
import {} from 'sinon'
import UrlNavigator from '../src/helpers/UrlNavigator'
import ResourceNavigator from '../src/resources/ResourceNavigator'
import BaseResource from '../src/resources/BaseResource'
import { fetchReturn, ok, noContent, error } from './testHelpers'

describe('BaseResource', () => {

	let urlNavigator = new UrlNavigator('http://localhost/ressource');
	let baseResource = new BaseResource(urlNavigator);

	beforeEach(() => {
		sinon.stub(window, 'fetch');
	});

	afterEach(() => {
		(<any>(window.fetch)).restore();
	});

	it('should return a ResourceNavigator', () => {
		let id = 1;
		let result = baseResource.id(id);
		expect(result).toEqual(jasmine.any(ResourceNavigator));
	});

	it('should return an empty list when getAll is called', async () => {
		fetchReturn(ok([]));
		let result = await baseResource.getAll();
		expect(result.length).toBe(0);
	});

	it('should throw an Error if status is invalid when getAll is called', async () => {
		fetchReturn(error(500, 'Internal Server Error'));
		try { await baseResource.getAll(); }
		catch (error) { expect(error.statusText).toBe('Internal Server Error'); }
	});

	it('should return an empty list if status is 204(No Content) when getAll is called', async () => {
		fetchReturn(noContent());
		let result = await baseResource.getAll();
		expect(result.length).toBe(0);
	});

	it('should return the object when get is called', async () => {
		let id = 1;
		fetchReturn(ok({ id: id }));
		let result = await baseResource.get(1);
		expect(result.id).toBe(id);
	});

	it('should throw an Error if status is invalid when get is called', async () => {
		let invalidStatus = 500;
		fetchReturn(error(invalidStatus, 'Internal Server Error'));
		try { await baseResource.get(1); }
		catch (error) { expect(error.statusText).toBe('Internal Server Error'); }
	});

	it('should throw an Error if status is 204(No Content) when get is called', async () => {
		let invalidStatus = 204;
		fetchReturn(error(invalidStatus, 'No Content'));
		try { await baseResource.get(1); }
		catch (error) { expect(error.statusText).toBe('No Content'); }
	});

	it('should return the object when put is called', async () => {
		let id = 1;
		fetchReturn(ok({ id: id }));
		let result = await baseResource.put({ id: id });
		expect(result.id).toBe(id);
	});

	it('should throw an Error if status is invalid when put is called', async () => {
		let invalidStatus = 500;
		fetchReturn(error(invalidStatus, 'Internal Server Error'));
		try { await baseResource.put({ id: 1 }); }
		catch (error) { expect(error.statusText).toBe('Internal Server Error'); }
	});

	it('should throw an Error if status is 204(No Content) when put is called', async () => {
		let invalidStatus = 204;
		fetchReturn(error(invalidStatus, 'No Content'));
		try { await baseResource.put({ id: 1 }); }
		catch (error) { expect(error.statusText).toBe('No Content'); }
	});

	it('should not throw an Error when delete is called', async () => {
		let id = 1;
		fetchReturn(ok({}));
		try { await baseResource.delete(1); }
		catch (error) { fail(error); }
	});

	it('should throw an Error if status is invalid when delete is called', async () => {
		let invalidStatus = 500;
		fetchReturn(error(invalidStatus, 'Internal Server Error'));
		try { await baseResource.delete(1); }
		catch (error) { expect(error.statusText).toBe('Internal Server Error'); }
	});

	it('should throw an Error if status is 204(No Content) when delete is called', async () => {
		let invalidStatus = 204;
		fetchReturn(error(invalidStatus, 'No Content'));
		try { await baseResource.delete(1); }
		catch (error) { expect(error.statusText).toBe('No Content'); }
	});

});
