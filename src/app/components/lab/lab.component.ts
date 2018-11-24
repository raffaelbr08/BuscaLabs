import { Component, OnInit,ViewEncapsulation, SimpleChange  } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProfileService } from '../../pages/profile/profile.service';
import { SearchService } from '../main-header/search.service';
import { LoginService } from '../../pages/login/login.service';



@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LabComponent implements OnInit {



  public labs: Array<Object>;

  public userFavorites;

  public modal: NgbModalRef;

  constructor(private modalService: NgbModal, public serachService: SearchService, public loginService: LoginService) { }

  ngOnInit() {   
    this.serachService.laboratoriosObservable.subscribe( laboratorios => {
      this.labs = laboratorios;
    });



  }

  saveFavorite(nome,id){
        this.serachService.idUser = this.loginService.response.object._id;
        this.serachService.tokenUser = this.loginService.response.context.token;
        this.serachService.LabFavoriteSave.nome = nome;
        this.serachService.LabFavoriteSave.idLaboratorio = id;

        this.serachService.saveFavorite().subscribe(
          dados=>{
            
            this.modal.close();
      

          },error=>{

          }
        )
  }

  openModal(content){
    this.modal = this.modalService.open(content, { size: 'lg' });
  }

}
