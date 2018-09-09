import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '@myworkspace/core/services/token-service/token.service';
import { environment } from 'apps/web-blog/src/environments/environment';
import * as io from 'socket.io-client';
import * as _ from 'lodash';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html'
})
export class FollowingComponent implements OnInit {
  users: any;
  socket: any;
  user: any;
  following = [];
  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) {
    this.socket = io(environment.api_url);
  }

  ngOnInit() {
    this.user = this.tokenService.GetPayLoad();
    this.getUser();
    this.socket.on('refreshPage', data => {
      this.getUser();
    });
  }

  getUser() {
    this.userService.getUserById(this.user._id).subscribe(
      data => {
        this.following = data.result.following;
      },
      error => {
        console.error(error);
      }
    );
  }

  unFollow(user: { _id: any; }) {
    this.userService.unFollowUser(user._id).subscribe(
      data => {
        this.socket.emit('refresh', {});
        this.toastr.clear();
        this.toastr.success('You have un-followed user');
      },
      error => {
        this.toastr.clear();
        this.toastr.error(error.message);
      }
    );
  }
}
