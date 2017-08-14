// TypeScript Version: 2.3
import { BasicRestApi } from 'basic-rest-api'

let api = new BasicRestApi('http://localhost');
let resource = api.resource('resource');
resource.get(1);
