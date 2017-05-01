import {} from 'jasmine'
import RequestInitGenerator from '../src/helpers/RequestInitGenerator'

describe('RequestInitGenerator', () => {

  let requestInit = new RequestInitGenerator();

  it('should return a basic get header', () => {
    expect(requestInit.get({}))
    .toBe({
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
  });

  it('should return a basic post header', () => {
    expect(requestInit.post({id:1},{}))
    .toBe({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:'{id:1}'
    });
  });

  it('should return a basic put header', () => {
    expect(requestInit.put({id:1},{}))
    .toBe({
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body:'{id:1}'
    });
  });

  it('should return a basic delete header', () => {
    expect(requestInit.delete({}))
    .toBe({
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });
  });

});
