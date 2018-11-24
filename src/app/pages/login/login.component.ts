import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public incorret: boolean;
  public exibirLogin: boolean;

  public errorLogin;


  constructor(public servicoLogin: LoginService, public router: Router) { }

  ngOnInit() {
  }

  onClick(DadosFormulario: NgForm) : void{
    this.servicoLogin.login = DadosFormulario.value;    

    this.servicoLogin.efetuarLogin()
    .subscribe(
      dados=>{
        if(dados.status === 200){
          this.servicoLogin.response = dados.json();
          this.router.navigate(['/result']);
          this.servicoLogin.exibirPerfil = true;
          this.servicoLogin.exibirLogin = false;
        }else{
          this.incorret = true;           
          
        }
      },error=>{
        this.incorret = true;
        this.errorLogin = error.json();
      }
    )

  }
}
