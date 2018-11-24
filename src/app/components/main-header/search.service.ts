import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class SearchService {
 
  public dadosBusca;

  private URL_SEARCH = "https://searchlabs-api.herokuapp.com/v1/laboratorios?regiao=";

  private URL_FAVORITE = "https://searchlabs-api.herokuapp.com/v1/favoritosUsuario";

  public labs;

  public laboratoriosObservable = new BehaviorSubject<any>(undefined); 

  public resultObservable =  new BehaviorSubject<any>(undefined); 

  public LabFavoriteSave = {
    nome: "",
    idLaboratorio: ""

  };

  public idUser;

  public tokenUser;

  
  constructor(public http: Http) { }

  searchLab(): Observable<Response>{

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.URL_SEARCH}${this.dadosBusca.regiao}&exame=${this.dadosBusca.exame}`,options);
  } 

  saveFavorite(): Observable<Response>{

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.tokenUser);


    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(`${this.URL_FAVORITE}/${this.idUser}`, this.LabFavoriteSave,options);

  }

}
