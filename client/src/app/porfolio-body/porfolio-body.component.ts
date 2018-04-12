import { Component, OnInit } from '@angular/core';
import { UserService } from '../server/controllers/user.service';
import { User } from '../server/models/user';

@Component({
  selector: 'app-porfolio-body',
  templateUrl: './porfolio-body.component.html',
  styleUrls: ['./porfolio-body.component.scss']
})
export class PorfolioBodyComponent implements OnInit {

  users = null;
  primaryUser: User;

  constructor(
    private _userServices: UserService
  ) { }


  ngOnInit() {
    this.getUsers()
  }
  getUsers(){
    this._userServices.getUsers()
    .then(users => {
      this.users = users
      this.primaryUser = users[0]
      console.log(this.primaryUser); 
    })
    .catch(err => console.log(err))
  }
}

