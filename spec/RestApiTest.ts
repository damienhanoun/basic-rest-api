import { } from '../node_modules/@types/jasmine/index.d.ts'
import { RestApi } from '../src/RestApi'

describe("Creating the main RestApi", () => {

  it("throw an exception if parameter is not a url", function() {
    let invalidUrl = "http:/api/test/";
    expect(function(){ new RestApi(invalidUrl) }).toThrowErrorOfType('InvalidUrlException');
  })

})
