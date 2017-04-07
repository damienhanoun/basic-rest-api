class RequestInitGenerator {

  private getHeader(headerExtension?:Object) : Object {
    var header: Headers;
    if(headerExtension == undefined)
      header = new Headers();
    else
      header = new Headers(headerExtension);
    return header;
  }

  private getJsonHeader(headerExtension?:Object) : Object {
    var header = { 'Content-Type': 'application/json' };
    if(headerExtension != undefined)
      Helpers.extend(headerExtension, header);
    return this.getHeader(header);
  }

  get(headerExtension?:Object) : RequestInit {
      return {
          method: 'GET',
          headers: this.getJsonHeader(headerExtension)
      };
  }

  put(object: Object, headerExtension?:Object) : RequestInit {
    return {
      method: 'PUT',
      headers: this.getJsonHeader(headerExtension),
      body: JSON.stringify(object)
    };
  }

  post(object: Object, headerExtension?:Object) : RequestInit {
    return {
      method: 'POST',
      headers: this.getJsonHeader(headerExtension),
      body: JSON.stringify(object)
    };
  }

  delete(headerExtension?:Object) : RequestInit {
    return {
        method: 'DELETE',
        headers: this.getHeader(headerExtension)
    };
  }

  postFile(file: File, headerExtension?:Object) : RequestInit {
    var data = new FormData();
    data.append('file', file);
    return {
      method: 'POST',
      headers: this.getHeader(headerExtension),
      body: data
    };
  }

  getFile(headerExtension?:Object) : RequestInit {
    return {
      method: 'GET',
      headers: this.getHeader(headerExtension)
    };
  }
}
