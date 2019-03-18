import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../interface/IUser';
import { UserService } from '../service/user.service';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // currentUser: IUser;
  // users: IUser[] = []
  @Input() selectedItem = 'info';
  user: IUser = {
    id: '',
    name: 'Lê Xuân Quỳnh',
    picture: '../../assets/lxquynh.jpeg',
    role: 'Nhân viên bán hàng',
    email: '',
    
  }
  constructor(private userSvc: UserService,
    private route: ActivatedRoute) {}
  //  { this.currentUser = JSON.parse(sessionStorage.getItem('token'))}

  ngOnInit() {
    const id = this.route.snapshot.params.userId
    this.userSvc.getCurrentUser(id).subscribe(data => {
      console.log(data);
      this.user = data;
    })

  }

}
