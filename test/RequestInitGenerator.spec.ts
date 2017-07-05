import {} from 'jasmine'
import RequestInitGenerator from '../src/helpers/RequestInitGenerator'
import {iteratorLength} from './testHelpers'

describe('RequestInitGenerator', () => {

	let requestInit = new RequestInitGenerator();

	it('should return a get header', () => {
		let result = requestInit.get({});
		expect(result.method).toBe('GET');
		expect(iteratorLength(result.headers.keys())).toBe(1);
		expect(result.headers.get('Content-Type')).toBe('application/json');
	});

	it('should return a get header with headers extended', () => {
		let result = requestInit.get({ 'X-Token': 'my token' });
		expect(result.method).toBe('GET');
		expect(iteratorLength(result.headers.keys())).toBe(2);
		expect(result.headers.get('Content-Type')).toBe('application/json');
		expect(result.headers.get('X-Token')).toBe('my token');
	});

	it('should return a post header', () => {
		let result = requestInit.post({ id: 1 }, {});
		expect(result.method).toBe('POST');
		expect(iteratorLength(result.headers.keys())).toBe(1);
		expect(result.headers.get('Content-Type')).toBe('application/json');
		expect(result.body).toBe('{"id":1}');
	});

	it('should return a post header with headers extended', () => {
		let result = requestInit.post({ id: 1 }, { 'X-Token': 'my token' });
		expect(result.method).toBe('POST');
		expect(iteratorLength(result.headers.keys())).toBe(2);
		expect(result.headers.get('Content-Type')).toBe('application/json');
		expect(result.headers.get('X-Token')).toBe('my token');
		expect(result.body).toBe('{"id":1}');
	});

	it('should return a put header', () => {
		let result = requestInit.put({ id: 1 }, {});
		expect(result.method).toBe('PUT');
		expect(iteratorLength(result.headers.keys())).toBe(1);
		expect(result.headers.get('Content-Type')).toBe('application/json');
		expect(result.body).toBe('{"id":1}');
	});

	it('should return a put header with headers extended', () => {
		let result = requestInit.put({ id: 1 }, { 'X-Token': 'my token' });
		expect(result.method).toBe('PUT');
		expect(iteratorLength(result.headers.keys())).toBe(2);
		expect(result.headers.get('Content-Type')).toBe('application/json');
		expect(result.headers.get('X-Token')).toBe('my token');
		expect(result.body).toBe('{"id":1}');
	});

	it('should return a delete header', () => {
		let result = requestInit.delete({});
		expect(result.method).toBe('DELETE');
		expect(iteratorLength(result.headers.keys())).toBe(1);
		expect(result.headers.get('Content-Type')).toBe('application/json');
	});

	it('should return a delete header with headers extended', () => {
		let result = requestInit.delete({ 'X-Token': 'my token' });
		expect(result.method).toBe('DELETE');
		expect(iteratorLength(result.headers.keys())).toBe(2);
		expect(result.headers.get('Content-Type')).toBe('application/json');
		expect(result.headers.get('X-Token')).toBe('my token');
	});

	it('should return a file to post header', () => {
		let file = new File([''], 'a file.txt');
		let result = requestInit.postFile(file, {});
		expect(result.method).toBe('POST');
		expect(iteratorLength(result.body.entries())).toBe(1);
		let formaDataEntry = result.body.entries().next().value;
		expect(formaDataEntry[0]).toBe('file');
		expect(formaDataEntry[1]).toEqual(jasmine.any(File));
		expect(formaDataEntry[1].name).toBe('a file.txt');
		expect(iteratorLength(result.headers.keys())).toBe(0);
	});

	it('should return a file to post header with headers extended', () => {
		let file = new File([''], 'a file.txt');
		let result = requestInit.postFile(file, { 'X-Token': 'my token' });
		expect(result.method).toBe('POST');
		let formaDataEntry = result.body.entries().next().value;
		expect(formaDataEntry[0]).toBe('file');
		expect(formaDataEntry[1]).toEqual(jasmine.any(File));
		expect(formaDataEntry[1].name).toBe('a file.txt');
		expect(iteratorLength(result.body.entries())).toBe(1);
		expect(iteratorLength(result.headers.keys())).toBe(1);
		expect(result.headers.get('X-Token')).toBe('my token');
	});

	it('should return a file to get header', () => {
		let result = requestInit.getFile({});
		expect(result.method).toBe('GET');
		expect(iteratorLength(result.headers.keys())).toBe(0);
	});

	it('should return a file to get header with headers extended', () => {
		let result = requestInit.getFile({ 'X-Token': 'my token' });
		expect(result.method).toBe('GET');
		expect(iteratorLength(result.headers.keys())).toBe(1);
		expect(result.headers.get('X-Token')).toBe('my token');
	});

});
