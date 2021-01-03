import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [LoginComponent, UnauthorizedComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
