var api = new RestApi('http://localhost:38937');
//api.resource<Parcel>('parcels').getAll()
//api.resource<>('ressource1').get(id)
//api.resource<>('ressource1').create(<>{})
//api.resource<>('ressource1').update(<>{id:,})
//api.resource<>('ressource1').delete(id)
//api.resource<>('ressource1').id(id).resource<>('ressource2')...
//api.fileResource<>('ressource1').get(id)
//api.fileResource<>('ressource1').upload<>(file)
//api.fileResource<>('ressource1').getAsBlob<>(id)
//api.fileResource<>('ressource1').delete(id)
//api.resource<>('ressource1').id(id).fileResource<>('ressource2')...
/*api.resource('parcels').get('123')
  .then(function(parcel){
    console.log(parcel);
  });*/
/*api.resource('parcels').create({id:'234'})
  .then(function(parcel){
    console.log('success');
  });*/
/*api.resource('parcels').id('123')
   .resource('notes').create({id:1, content:'Je suis une note!'})
   .then(function(note){
     console.log('success');
   });*/
/*api.resource('parcels').id('123')
  .resource('notes').delete(1)
  .then(function(){
    console.log('success');
  });*/
/*var input = document.querySelector('input[type="file"]');
input.addEventListener('change', function () {
    console.log('Begin!')
    api.resource('parcels').id('123')
       .fileResource('files').upload(input.files[0], () => { console.log('End!') })
       .then((file)=>{
         console.log(file);
       });
}, false);*/
/*api.resource('parcels').id('123')
  .resource('files').get(1)
  .then(function(file){
    console.log(file);
  });*/
/*api.resource('parcels').id('123')
  .fileResource('files').download(3)
  .then(function(blob){
    download(blob, "downloaded files")
  });*/
/*api.resource('parcels').id('123')
  .fileResource('files').delete(2)
  .then(function(){
    console.log("success");
  });*/
