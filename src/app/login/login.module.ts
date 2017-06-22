import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

const ROUTES: Routes = [
 {path: 'login', component: LoginComponent}
];

const config = {  api_login: 'http://localhost:3033/login',
                api_users: 'http://localhost:3033/restricted/1/list/users'
             };

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [{provide: 'config', useValue: config}],
  declarations: [LoginComponent]
})
export class LoginModule { }
