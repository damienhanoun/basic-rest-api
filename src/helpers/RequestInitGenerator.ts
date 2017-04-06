class RequestInitGenerator {

  private getHeader(headerExtension?:object) : object {
    var header: Headers;
    if(headerExtension == undefined)
      header = new Headers();
    else
      header = new Headers(headerExtension);
    return header;
  }

  private getJsonHeader(headerExtension?:object) : object {
    var header = { 'Content-Type': 'application/json' };
    if(headerExtension != undefined)
      extend(headerExtension, header);
    return this.getHeader(header);
  }

  get(headerExtension?:object) : RequestInit {
      return {
          method: 'GET',
          headers: this.getJsonHeader(headerExtension)
      };
  }

  put(object: object, headerExtension?:object) : RequestInit {
    return {
      method: 'PUT',
      headers: this.getJsonHeader(headerExtension),
      body: JSON.stringify(object)
    };
  }

  post(object: object, headerExtension?:object) : RequestInit {
    return {
      method: 'POST',
      headers: this.getJsonHeader(headerExtension),
      body: JSON.stringify(object)
    };
  }

  delete(headerExtension?:object) : RequestInit {
    return {
        method: 'DELETE',
        headers: this.getHeader(headerExtension)
    };
  }

  postFile(file: File, headerExtension?:object) : RequestInit {
    var data = new FormData();
    data.append('file', file);
    return {
      method: 'POST',
      headers: this.getHeader(headerExtension),
      body: data
    };
  }

  getFile(headerExtension?:object) : RequestInit {
    return {
      method: 'GET',
      headers: this.getHeader(headerExtension)
    };
  }
}
