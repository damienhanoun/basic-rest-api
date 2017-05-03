import {} from 'jasmine'
import RequestInitGenerator from '../src/helpers/RequestInitGenerator'
import {iteratorLength} from './testHelpers'

describe('RequestInitGenerator', () => {

  let requestInit = new RequestInitGenerator();

  it('should return a basic get header', () => {
    let result = requestInit.get({});
    expect(result.method).toBe('GET');
    expect(result.headers.get('Content-Type')).toBe('application/json');
    expect(iteratorLength(result.headers.keys())).toBe(1);
  });

  it('should return a get header extended', () => {
    let result = requestInit.get({'X-Token':'my token'});
    expect(result.method).toBe('GET');
    expect(result.headers.get('Content-Type')).toBe('application/json');
    expect(result.headers.get('X-Token')).toBe('my token');
    expect(iteratorLength(result.headers.keys())).toBe(2);
  });

  it('should return a basic post header', () => {
    let result = requestInit.post({id:1}, {});
    expect(result.method).toBe('POST');
    expect(result.headers.get('Content-Type')).toBe('application/json');
    expect(iteratorLength(result.headers.keys())).toBe(1);
    expect(result.body).toBe('{"id":1}');
  });

  it('should return a post header extended', () => {
    let result = requestInit.post({id:1}, {'X-Token':'my token'});
    expect(result.method).toBe('POST');
    expect(result.headers.get('Content-Type')).toBe('application/json');
    expect(result.headers.get('X-Token')).toBe('my token');
    expect(iteratorLength(result.headers.keys())).toBe(2);
    expect(result.body).toBe('{"id":1}');
  });

  it('should return a basic put header', () => {
    let result = requestInit.put({id:1},{});
    expect(result.method).toBe('PUT');
    expect(result.headers.get('Content-Type')).toBe('application/json');
    expect(iteratorLength(result.headers.keys())).toBe(1);
    expect(result.body).toBe('{"id":1}');
  });

  it('should return a put header extended', () => {
    let result = requestInit.put({id:1}, {'X-Token':'my token'});
    expect(result.method).toBe('PUT');
    expect(result.headers.get('Content-Type')).toBe('application/json');
    expect(result.headers.get('X-Token')).toBe('my token');
    expect(iteratorLength(result.headers.keys())).toBe(2);
    expect(result.body).toBe('{"id":1}');
  });

  it('should return a basic delete header', () => {
    let result = requestInit.delete({});
    expect(result.method).toBe('DELETE');
    expect(result.headers.get('Content-Type')).toBe('application/json');
    expect(iteratorLength(result.headers.keys())).toBe(1);
  });

  it('should return a basic delete header', () => {
    let result = requestInit.delete({'X-Token':'my token'});
    expect(result.method).toBe('DELETE');
    expect(result.headers.get('Content-Type')).toBe('application/json');
    expect(result.headers.get('X-Token')).toBe('my token');
    expect(iteratorLength(result.headers.keys())).toBe(2);
  });

});
