# A very simple and basic REST API based on fetch

## Description
This library is based on fetch so you can use Promise.
On some navigator, you have to get a polifyll because fetch is not implemented on every browser yet.
It not use loader for now which is pretty bad but it will in the futur.

## Requirements
Before beginning, you must install :
- npm : https://nodejs.org
- gulp : `npm install gulp -g`

## Get dependencies and compile the project
In the root folder :
`npm install`

and then :
`gulp`

## Predetermined behaviors
There is three predetermined behaviors you can't change for now.

The first one is the Content-Type is application/json by default (when call or response don't include file).

The second one is you are forced to use id attribute (which can be string or int) on all your entities.

And the third one is about the way to manage files.
To let you get or update informations on a file without have to deal with the file itself, you can use two verbs (even if it is not a strict REST approach) :
 - download
 - upload

Your url should look like this : http://mysite/api/resource/1/download

## Examples in typescript
All methods which call the web service returns Promise.
```javascript
var api = new BasicRestApi('http://myWebApi/api'); // don't use / at the end

var resource = api.resource<YourResource>('resource1');
resource.getAll();                           // .../resource1   in GET
resource.get(1);                             // .../resource1/1 in GET
resource.create(<YourResource>{ ... });      // .../resource1   in POST
resource.save(<YourResource>{ id:1, ... });  // .../resource1/1 in PUT
resource.delete(1);                          // .../resource1/1 in DELETE

var subResource = resource.id(1).resource<YourSubResource>('subResource');
subResource.get(2); //.../resource1/1/subResource/2

var file = input.files[0];
var fileResource = api.fileResource<YourFileResource>('ressource2');
fileResource.get(1);             //Get only informations (not the file)
fileResource.save({id:1, ... }); //Save only informations (not the file)
fileResource.upload(file);       //POST
//And if you want to do something at the end like hide an image of a loader in both case success and error
fileResource.upload(file, () => { console.log('End!') });
fileResource.download(1);        //GET  Warning! return a Blob!
fileResource.delete(1);

//All orders is fine
fileResource.id(1).resource<YourSubResource>('subResource');
resource.id(1).fileResource<YourSubFileResource>('subFileResource');

//And then, use Promise!
resource.get(1).then((resource)=>{
  //Do something with the resource
}).catch((error)=>{
  //Do something with the error
});

//Extending Header (possible on all methods)
resource.get(1, { 'X-Token': token });
```

## Error handling
Even if fetch does not behave like XMLHttpRequest because it not throw exception when for example the server respond a 500 internal server error, I change this behavior by checking the response status and throw Exception if needed.

## Typescript definitions
As you could see in the root folder, there is a typescript_definitions folder you can use in your project if you use typescript.
