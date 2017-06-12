# A very simple and basic REST API based on fetch

## Description
This library let you call urls using REST principles in a very simple way.

## Requirements
Before beginning, you must install :
* npm : https://nodejs.org

As these two, are not supported on all browsers, you will need to get a polyfill :
* fetch : https://github.com/github/fetch
* Promise : https://github.com/taylorhakes/promise-polyfill

## Get dependencies
In the root folder, run the following command
```
npm install
```

## Compile the project
This library is compiled with webpack 2, so you can run the following commands depending of your module choice (there is a watch by default) :
* amd : `npm run build:amd`
* es5 : `npm run build:es5`

## Predetermined behaviors
There is four predetermined behaviors you can't change for now :
* The Content-Type is application/json by default (when call or response don't include file).
* You are forced to use id attribute (which can be string or number) on all your entities.
* There are two verbs to manage file (even if it is not a strict REST approach) :
  * download
  * upload
* The status 204(No-Content) will throw an error even if fetch consider it as ok.

## Typescript example
Here is some basics usage :
```javascript
var api = new BasicRestApi('http://myWebApi/api'); // don't use / at the end

var resource = api.resource<YourResource>('resource1');
//.../resource1
resource.getAll();     
//.../resource1/1
resource.get(1);
//.../resource1
resource.post(<YourResource>{ ... });
//.../resource1/1
resource.put(<YourResource>{ id:1, ... });
//.../resource1
resource.delete(1);
```

And some others dealing with files :
```javascript
var file = input.files[0];
var fileResource = api.fileResource<YourFileResource>('ressource2');

//Deal with file information (not the file itself)
//.../ressource2
fileResource.getAll();
//.../ressource2/1
fileResource.get(1);
//.../ressource2/1
fileResource.put({id:1, ... });
//.../ressource2/1
fileResource.delete(1);

//Deal with the file
//.../ressource2/1/download
fileResource.download(1); //GET (return a Promise<Blob>)
//.../ressource2/upload
fileResource.upload(file); //POST
//And if you want to do something at the end like hide an image of a loader in both case success and error
fileResource.upload(file, () => { console.log('End!') });
```

You can have as many sub resources as you want :
```javascript
//.../universes/1/planetes/Earth/humans/damien_hanoun
let me: Human = await api.resource('universes').id(1)
                         .resource('planetes').id('Earth')
                         .resource<Human>('humans').get('damien_hanoun');
```

In the order you want :
```javascript
//.../books/1/pages/1/paragraphs/1
let firstParagraph: string = await api.fileResource('books').id(1)
                                      .fileResource('pages').id(1)
                                      .resource<string>('paragraphs').get(1);
```

You can extend header on each method like this :
```javascript
resource.get(1, { 'X-Token': token });
```

And finally, get the result (which is a promise) :
```javascript
resource.get(1).then((resource)=>{
  //Do something with the resource
}).catch((error)=>{
  //Do something with the error
});
//Or (in an async function)
try {
  let resource = await resource.get(1);
  //Do something with the resource
} catch(error) {
  //Do something with the error
}
```

## Modules

### es5 (without module)
```javascript
let api = new BasicRestApi('http://localhost');
```

### amd (requirejs)
 ```javascript
 require(['basic-rest-api'], function(BasicRestApi){
   let api = new BasicRestApi('http://localhost');
 });
 ```

### typescript (not available yet)
Definitions are in types/basic-rest-api/index.d.ts.
For now, it is better to copy them but soon I hope it will be possible to use it like this :
```javascript
import { BasicRestApi } from 'basic-rest-api'
let api = new BasicRestApi('http://localhost');
```

## Error handling
Even if fetch does not behave like XMLHttpRequest because it not throw exception when for example the server respond a 500 internal server error, I change this behavior by checking the response status and throw Exception if needed.

## Test
Just go in index.html and try it yourself.
