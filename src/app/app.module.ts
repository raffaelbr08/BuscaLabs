import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { FooterComponent } from './components/footer/footer.component';
import { ResultComponent } from './pages/result/result.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { LabComponent } from './components/lab/lab.component';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';



import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { PreRegisterComponent } from './pages/pre-register/pre-register.component';
import { LoginService } from './pages/login/login.service';
import { ProfileService } from './pages/profile/profile.service';
import { LabFavoriteComponent } from './components/lab-favorite/lab-favorite.component';
import { SearchService } from './components/main-header/search.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ResultComponent,
    MainHeaderComponent,
    LabComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    RegisterUserComponent,
    PreRegisterComponent,
    LabFavoriteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()    
    
  ],
  providers: [LoginService,
    ProfileService,
    SearchService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
