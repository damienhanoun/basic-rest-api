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
