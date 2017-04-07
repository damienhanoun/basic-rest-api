var api = new RestApi('http://localhost:38937/api');

//api.resource<>('ressource1').getAll()
//api.resource<>('ressource1').get(id)
//api.resource<>('ressource1').create(<>{})
//api.resource<>('ressource1').update(<>{id:,})
//api.resource<>('ressource1').delete(id)

//api.resource<>('ressource1').id(id).resource<>('ressource2')...

//api.fileResource<>('ressource1').get(id)
//api.fileResource<>('ressource1').save(file)
//api.fileResource<>('ressource1').upload(file)
//api.fileResource<>('ressource1').getAsBlob(id)
//api.fileResource<>('ressource1').delete(id)

//api.resource<>('ressource1').id(id).fileResource<>('ressource2')...

function download(blob:Blob, name:string) {
  var a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);
  let url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = name;
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}
