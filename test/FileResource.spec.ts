import {} from 'jasmine'
import {} from 'sinon'
import UrlNavigator from '../src/helpers/UrlNavigator'
import ResourceNavigator from '../src/resources/ResourceNavigator'
import BaseResource from '../src/resources/BaseResource'
import FileResource from '../src/resources/FileResource'
import { fetchReturn, ok, noContent, error } from './testHelpers'

describe('FileResource', () => {

  let urlNavigator = new UrlNavigator('http://localhost/fileRessource');
  let fileResource = new FileResource(urlNavigator);

  beforeEach(() => {
    sinon.stub(window, 'fetch');
  });

  afterEach(() => {
    (<any>(window.fetch)).restore();
  });

  it('should return file information when upload is called', async () => {
    fetchReturn(ok({id:1, name:'file.txt'}));
    var file = new File([""], 'file.txt');
    let result = await fileResource.upload(file);
    expect(result.id).toBe(1);
  });

  it('should throw an error when upload is called', async () => {
    fetchReturn(error(500, 'Internal Server Error'));
    var file:File = new File([""], 'file.txt');
    try { await fileResource.upload(file); }
    catch(error) { expect(error).toBe('Internal Server Error'); }
  });

  it('should not throw error when download is called', async () => {
    fetchReturn(ok({}));
    try { await fileResource.download(1); }
    catch(error) { fail(error); }
  });

  it('should throw an error if response is status 500 when download is called', async () => {
    fetchReturn(error(500, 'Internal Server Error'));
    try { await fileResource.download(1); fail();}
    catch(error) { expect(error).toBe('Internal Server Error'); }
  });

  it('should call after once', async () => {
    let after = sinon.spy();
    let file = new File([""], 'file.txt');
    await fileResource.upload(file, after);
    expect(after.calledOnce).toBe(true);
  });

});
