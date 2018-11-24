import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()
export class LoginService {

  private URL_LOGIN: string = "https://searchlabs-api.herokuapp.com/v1/usuarioLogar";

  public response;  

  public login;

  public exibirPerfil: boolean;
  public exibirLogin: boolean = true;


  constructor(private http: Http) { }

  efetuarLogin(): Observable<Response>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.URL_LOGIN}`,JSON.stringify(this.login),options);
   
  }
}
