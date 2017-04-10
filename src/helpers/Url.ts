class Url {

  constructor(private baseUrl : string) {}

  addId(id:string|number) : Url {
    return new Url(`${this.baseUrl}/${id.toString()}`);
  }

  addResource(name:string) : Url {
    return new Url(`${this.baseUrl}/${name}`);
  }

  addVerb(verb:string) : Url {
    return new Url(`${this.baseUrl}/${verb}`);
  }

  toString() : string {
    return this.baseUrl;
  }

}
