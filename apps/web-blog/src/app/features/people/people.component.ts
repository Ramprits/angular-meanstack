import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as io from 'socket.io-client';
import * as _ from 'lodash';
import { TokenService } from '@myworkspace/core/services/token-service/token.service';
import { environment } from 'apps/web-blog/src/environments/environment';
import { UserService } from 'apps/web-blog/src/app/core/services/user.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  users: any;
  socket: any;
  loggedIn: any;
  userArray = [];
  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) {
    this.socket = io(environment.api_url);
  }

  ngOnInit() {
    this.loggedIn = this.tokenService.GetPayLoad();
    this.getUsers();
    this.getUser();
    this.socket.on('refreshPage', data => {
      this.getUsers();
      this.getUser();
    });
  }
  getUsers() {
    setTimeout(() => {
      this.userService.getUsers().subscribe(
        user => {
          _.remove(user.users, { username: this.loggedIn.username });
          this.users = user.users;
        },
        err => {
          this.toastr.clear();
          this.toastr.error(err.message);
        }
      );
    }, 10);
  }

  getUser() {
    this.userService.getUserById(this.loggedIn._id).subscribe(data => {
      this.userArray = data.result.following;
    });
  }

  following(user) {
    this.userService.followUser(user._id).subscribe(data => {
      this.socket.emit('refresh', {});
      this.toastr.clear();
      this.toastr.info(data.message);
    });
  }

  CheckInArray(arr, id) {
    const result = _.find(arr, ['userFollowed._id', id]);
    if (result) {
      return true;
    } else {
      return false;
    }
  }
}
