var api = new BasicRestApi('http://localhost/api');

//api.resource<>('ressource1').getAll()
//api.resource<>('ressource1').get(id)
//api.resource<>('ressource1').create(<>{})
//api.resource<>('ressource1').update(<>{id:,})
//api.resource<>('ressource1').delete(id)

//api.resource<>('ressource1').id(id).resource<>('ressource2')...

//api.fileResource<>('ressource1').get(id)
//api.fileResource<>('ressource1').save(<>{id:,}})
var input = document.getElementById('uploadDocument');
input.addEventListener('change', function() {
  //api.fileResource<>('ressource1').upload(input.files[0], _=>console.log('Done!'))
});
//api.fileResource<>('ressource1').download(id).then((blob)=>{download(blob,'name of the file')})
//api.fileResource<>('ressource1').delete(id)

//api.resource<>('ressource1').id(id).fileResource<>('ressource2')...



//Some helpers to test when you get files or images
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

function createImg(blob: Blob, name: string) {
    let img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    img.alt = name;
    return img;
}
