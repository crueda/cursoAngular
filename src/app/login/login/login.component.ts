import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { CommonValidator } from './common.validator'
import { LoginService } from './../login.service';
import { LoginProxyService } from './../login-proxy.service';
import { UserService } from './../user.service';
import { UserProxyService } from './../user-proxy.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService, LoginProxyService, UserService, UserProxyService]
})

export class LoginComponent implements OnInit {

  form: FormGroup;
  token: string;
  users: string;

  constructor(@Inject(LoginService) private loginService: LoginService, @Inject(UserService) private userService: UserService) { }


  login() {
    //console.log('username:' + this.form.get('name').value);
    //console.log('password:' + this.form.get('pass').value);
    const username =  this.form.get('name').value;
    const password =  this.form.get('pass').value;

    // LLamar a la api de login
    this.loginService.dologin(username, password).subscribe(
      token => this.token = token
    )
  }

  getUsers() {
    // LLamar a la api de los usuarios
    this.userService.getUsers(this.token).subscribe(
      data => this.users = data
    )
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
