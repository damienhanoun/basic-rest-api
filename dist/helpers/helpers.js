function extend(destination, source) {
    for (var key in source)
        destination[key] = source[key];
}
function download(blob, name) {
    var a = document.createElement("a");
    a.style.display = "none";
    document.body.appendChild(a);
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = name;
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}
