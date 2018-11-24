import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResultComponent } from './pages/result/result.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { PreRegisterComponent } from './pages/pre-register/pre-register.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  },{
    path:"result", component:ResultComponent
  },
  {
    path:"register", component:RegisterComponent
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:"profile/:idUsuario", component:ProfileComponent
  },
  {
    path:"registeruser", component:RegisterUserComponent
  },
  {
    path:"preregister", component:PreRegisterComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
