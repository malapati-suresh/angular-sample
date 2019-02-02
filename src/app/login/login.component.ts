import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupName } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public loginForm: FormGroup
  public formLogin: FormGroup

  public email: any = '';
  public password: any = '';

  public loginFormData: any;

  selectOptions = 'first';

  genders = ['Male', 'Famale']

  public genderOptions: any = '';


  ngOnInit() {


    this.formLogin = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required)
    })

    this.loginForm = new FormGroup({
      formData: new FormGroup({
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", Validators.required)
      })

    })

  }


  formSubmit() {
    console.log(this.formLogin.value, "Forms")
    if (this.formLogin.valid) {

    } else {
      this.formLogin.get('email').markAsTouched();
      this.formLogin.get('password').markAsTouched();
    }
  }


  submitForm() {
    console.log(this.loginForm.value, "Loginnn")
    if (this.loginForm.valid) {

    } else {
      this.loginForm.get('formData').get('email').markAsTouched();
      this.loginForm.get('formData').get('password').markAsTouched();
    }
  }


  onSubmit() {
    this.loginFormData = {
      email: this.email,
      password: this.password,
      selectOptions: this.selectOptions,
      genderOptions: this.genderOptions,
    }

    console.log(this.loginFormData, "Template Driven")

  }


}
