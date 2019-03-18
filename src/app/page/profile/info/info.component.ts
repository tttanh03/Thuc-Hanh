import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../service/user.service';
import { IUser } from '../interface/IUser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  
  // profile: IProfile = {
  //   id: '',
  //   name: 'Lê Xuân Quỳnh',
  //   picture: '../../assets/lxquynh.jpeg',
  //   position: 'Nhân viên bán hàng',
  //   email: 'quynhlx@icloud.com',
  //   phone: '0388166199',
  // }
  @Input() user: IUser= {
     id: '',
     name: '',
     picture: '',
     role:'',
     email:'',
  };
  constructor(private userSvc: UserService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.userId
    this.userSvc.getCurrentUser(id).subscribe(data => {
      console.log(data);
      this.user = data;
    })

}
}
