import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../pages/login/login.service';
import { NgForm } from '@angular/forms';
import { SearchService } from './search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {


  constructor(public loginservice: LoginService, public searchService: SearchService, private router: Router) { }

  ngOnInit() {
  }  
  onSearch(dadosForm: NgForm): void{

    this.searchService.dadosBusca = dadosForm.value;
    this.router.navigate(['./result']);

    this.searchService.searchLab().subscribe(
      dados=>{
        this.searchService.labs = dados.json();
        this.searchService.laboratoriosObservable.next(this.searchService.labs.object);
        this.searchService.resultObservable.next(this.searchService.labs.context);
     

      },error=>{

        alert("Nao encontramos nenhum laboratorio, digite um Estado ou Cidade ou Bairro valido.")

      }
      
    )

  }

}
