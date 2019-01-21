import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;
  constructor(private router: Router, private authSvc: AuthService) { }

  ngOnInit() {
  }

  login() {
    if(this.email && this.password) {
      console.log(this.email)
      console.log(this.password)

      this.authSvc.login(this.email, this.password).subscribe(res => {
        console.log(res);
        this.router.navigate(['/tables'])
      }, (err) => {
        alert('Sai email hoac password');
      })
      // 
    }
  }
}