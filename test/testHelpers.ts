export function iteratorLength(iterator:any) : number{
  let i = 0;
  while(!iterator.next().done)
    i++;
  return i;
}

export function ok(body) {
  let mockResponse = new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-type': 'application/json'
    }
  });

  return Promise.resolve(mockResponse);
}

export function noContent() {
  let mockResponse = new Response(undefined, {
    status: 204,
    statusText:'No Content',
    headers: {
      'Content-type': 'application/json'
    }
  });

  return Promise.resolve(mockResponse);
}

export function error(status, statusText) {
  var mockResponse = new Response(undefined, {
    status: status,
    statusText:statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });

  return Promise.resolve(mockResponse);
}

export function fetchReturn(returnValue:object){
  (<any>(window.fetch)).returns(returnValue);
}
