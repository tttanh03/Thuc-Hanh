import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = new FormControl (' ', [
    Validators.required,
    Validators.email
  ])
  password = new FormControl ('', [
    Validators.minLength(8),
    Validators.maxLength(32),
    Validators.required
    
  ])
  loginForm: FormGroup = this.builder.group ({
    username:this.username,
    password: this.password
  });
  constructor(private router: Router, private authSvc: AuthService, private builder: FormBuilder) { }

  ngOnInit() {
  }

  login() {
    console.log(this.username)
    console.log(this.password)
    if(this.loginForm.valid) {
      console.log('Form is valid');
      this.authSvc.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(res => {
            console.log(res);
            this.router.navigate(['/tables'])
          }, (err) => {
            alert('Sai email hoac password');
          })
    } 
    // if(this.email && this.password) {
    //   console.log(this.email)
    //   console.log(this.password)

    //   this.authSvc.login(this.email, this.password).subscribe(res => {
    //     console.log(res);
    //     this.router.navigate(['/tables'])
    //   }, (err) => {
    //     alert('Sai email hoac password');
    //   })
    //   // 
    // }
  }}
