# A very simple and basic REST API based on fetch

## Description
This library let you call urls using REST principles in a very simple way.

## Requirements
Before beginning, you must install :
- npm : https://nodejs.org

As these two, are not supported on all browser, you will need to get a polyfill :
- fetch : https://github.com/github/fetch
- Promise : https://github.com/taylorhakes/promise-polyfill

## Get dependencies
In the root folder, run the following command
```
npm install
```

## Compile the project
This library is compiled with webpack 2, so you can run the following command
```
npm run build
```

## Predetermined behaviors
There is four predetermined behaviors you can't change for now :
* The Content-Type is application/json by default (when call or response don't include file).
* You are forced to use id attribute (which can be string or number) on all your entities.
* There are two verbs to manage file (even if it is not a strict REST approach) :
  * download
  * upload
* The status 204(No-Content) will throw an error even if fetch consider it as ok.

## Typescript example
Here is some basics usage.
```javascript
var api = new RestApi('http://myWebApi/api'); // don't use / at the end

var resource = api.resource<YourResource>('resource1');
//.../resource1
resource.getAll(); //GET      
//.../resource1/1
resource.get(1); //GET
//.../resource1
resource.create(<YourResource>{ ... }); //POST
//.../resource1/1
resource.save(<YourResource>{ id:1, ... }); //PUT
//.../resource1
resource.delete(1); //DELETE
```

And some others dealing with files.
```javascript
var file = input.files[0];
var fileResource = api.fileResource<YourFileResource>('ressource2');
//.../ressource2
fileResource.getAll(); //GET (not the files)
//.../ressource2/1
fileResource.get(1); //GET (not the file)
//.../ressource2/1/download
fileResource.download(1); //GET (return a Promise<Blob>)
//.../ressource2/upload
fileResource.upload(file); //POST
//And if you want to do something at the end like hide an image of a loader in both case success and error
fileResource.upload(file, () => { console.log('End!') });
//.../ressource2/1
fileResource.save({id:1, ... }); //PUT (not the file)
//.../ressource2/1
fileResource.delete(1); //DELETE
```

You can have as many sub resources as you want.
```javascript
//.../universes/1/planetes/Earth/humans/damien_hanoun
let me: Human = await api.resource('universes').id(1)
                         .resource('planetes').id('Earth')
                         .resource<Human>('humans').id('damien_hanoun');
```

In the order you want.
Here fileResource is before resource.
```javascript
//.../books/1/pages/1/paragraphs/1
let firstParagraph: string = api.fileResource('books').id(1)
                                .fileResource('pages').id(1)
                                .resource<string>('paragraphs').id(1);
```

You can extend header on each method like this.
```javascript
resource.get(1, { 'X-Token': token });
```

And finally, get the result.
```javascript
//And then, use Promise!
resource.get(1).then((resource)=>{
  //Do something with the resource
}).catch((error)=>{
  //Do something with the error
});

//Or use await in async function
try {
  let resource = await resource.get(1);
  //Do something with the resource
} catch(error) {
  //Do something with the error
}
```

## Error handling
Even if fetch does not behave like XMLHttpRequest because it not throw exception when for example the server respond a 500 internal server error, I change this behavior by checking the response status and throw Exception if needed.

## Typescript definitions
As you could see in the root folder, there is a typescript_definitions folder you can use in your project if you use typescript.

## Test
Just go in index.html and try it yourself.
