import { FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonValidator } from './common.validator'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor() { }


  login() {
    console.log(this.form.get('name').value);
    console.log(this.form.get('pass').value);
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
