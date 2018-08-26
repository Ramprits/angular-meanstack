import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
import { TokenService } from '@myworkspace/core/services/token-service/token.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  users: any;
  loggedIn: any;
  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.loggedIn = this.tokenService.GetPayLoad();
    setTimeout(() => {
      this.userService.getUsers().subscribe(
        user => {
          _.remove(user.users, { username: this.loggedIn.username });
          this.users = user.users;
        },
        err => {
          this.toastr.error(err.message);
        }
      );
    }, 10);
  }
}
