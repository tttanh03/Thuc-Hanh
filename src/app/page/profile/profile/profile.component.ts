import { Component, OnInit, Input } from '@angular/core';
import { IProfile } from '../interfaces/IProfile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() selectedItem = 'info';
  profile: IProfile = {
    id: '',
    name: 'Lê Xuân Quỳnh',
    picture: '../../assets/lxquynh.jpeg',
    position: 'Nhân viên bán hàng',
    email: '',
    phone: '',
  }
  constructor() { }

  ngOnInit() {

  }

}
