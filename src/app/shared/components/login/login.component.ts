import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeLoginForm();
    this.initializeSignupForm();
  }

  onLogin(): void {
    console.log(this.loginForm.value);
  }

  onSignup(): void {
    console.log(this.signupForm.value)
  }

  private initializeLoginForm(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }

  private initializeSignupForm(): void {
    this.signupForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      displayName: [null, Validators.required],
      color: ['red', Validators.required]
    })
  }
}
