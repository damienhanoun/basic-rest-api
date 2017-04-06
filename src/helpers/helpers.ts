function extend(destination:Object,source:Object) {
    for (var key in source)
        destination[key] = source[key]
}

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
