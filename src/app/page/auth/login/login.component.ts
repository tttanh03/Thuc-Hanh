import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../profile/service/user.service';
import { IUser } from '../../profile/interface/IUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input()

  username = new FormControl(' ', [
    Validators.required,
    Validators.email
  ])
  password = new FormControl('', [
    Validators.minLength(8),
    Validators.maxLength(32),
    Validators.required

  ])
  loginForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password
  });
  constructor(private router: Router, private authSvc: AuthService, private builder: FormBuilder,
    private userSvc: UserService) { }

  ngOnInit() {
  }

  login() {
    // console.log(this.username)
    // console.log(this.password)
    if (this.loginForm.valid) {
      console.log('Form is valid');
      this.authSvc.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(res => {
        console.log(res);

        this.router.navigate(['/tables'])
      }, (err) => {
        alert('Sai email hoac password');
      })
    }
    // ) 

  }
}
// }


