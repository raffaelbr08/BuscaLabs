import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private rota: ActivatedRoute, private profileService: ProfileService){}
  
  ngOnInit() { 
    
    const idUsuario = this.rota.snapshot.params.idUsuario;

    this.profileService.idUser = idUsuario;

    this.profileService.getUsuario().subscribe(
      dados=>{
        this.profileService.userFavorites = dados.json().object.favoritos;

      },error=>{

        alert("Ërro ao trazer mais detalhes")

      }
    
    )



  }

}
