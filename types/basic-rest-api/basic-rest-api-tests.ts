// TypeScript Version: 2.3
import {} from 'BasicRestApi'

let api = new BasicRestApi('http://localhost');
let resource = api.resource('resource');
resource.get(1);
