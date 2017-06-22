import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { CommonValidator } from './common.validator'
import { LoginService } from './../login.service';
import { LoginProxyService } from './../login-proxy.service';
import { UserService } from './../user.service';
import { UserProxyService } from './../user-proxy.service';
import { RolService } from './../rol.service';
import 'rxjs/add/operator/map';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService, LoginProxyService, UserService, UserProxyService, RolService]
})

export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;
  token: string;
  users: string;
  sub: Subscription
  sub_rol: Subscription
  sub_users: Subscription
  rol: number

  // tslint:disable-next-line:max-line-length
  constructor(@Inject(LoginService) private loginService: LoginService, 
              private rolService: RolService, 
              @Inject(UserService) private userService: UserService) { }


  login() {
    //console.log('username:' + this.form.get('name').value);
    //console.log('password:' + this.form.get('pass').value);
    const username =  this.form.get('name').value;
    const password =  this.form.get('pass').value;

    // LLamar a la api de login
    this.sub = this.loginService.dologin(username, password).subscribe(
      token => {
        this.token = token;
        this.sub_rol = this.rolService.getRol().subscribe(
          role => this.rol = role
        );
      }
    )
  }

  getUsers() {
    // LLamar a la api de los usuarios
    this.sub_users = this.userService.getUsers(this.token).subscribe(
      users => {
        console.log(users);
        this.users = users
      }
    )
  }

  ngOnDestroy(){
    if (this.sub) {
      this.sub.unsubscribe();
    };
    if (this.sub_rol) {
      this.sub_rol.unsubscribe();
    };
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('' ,
        Validators.compose([Validators.required,
                            Validators.minLength(4),
                            CommonValidator.startWithNumber]),
        Validators.composeAsync([CommonValidator.userTaken])),
      pass: new FormControl('')
    })
  }

}
