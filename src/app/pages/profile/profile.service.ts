import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class ProfileService {

  private URL_USER: string = "https://searchlabs-api.herokuapp.com/v1/usuario";

  public idUser: string;

  public userFavorites: Array<object>;


  constructor(public http: Http) { }

  getUsuario(): Observable<Response>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.URL_USER}/${this.idUser}`,options);
   
  }  

}
