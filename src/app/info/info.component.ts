import { Component, OnInit } from '@angular/core';
import { IProfile } from '../interfaces/IProfile';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  profile: IProfile = {
    id: '',
    name: 'Lê Xuân Quỳnh',
    picture: '../../assets/lxquynh.jpeg',
    position: 'Nhân viên bán hàng',
    email: 'quynhlx@icloud.com',
    phone: '0388166199',
  }
  constructor() { }

  ngOnInit() {
  }

}
