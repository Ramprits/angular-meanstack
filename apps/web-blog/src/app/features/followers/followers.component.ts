import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/src/app/core/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '@myworkspace/core/services/token-service/token.service';
import * as io from 'socket.io-client';
import { environment } from '@app/src/environments/environment';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  users: any;
  socket: any;
  user: any;
  followers: any;
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
        this.followers = data.result.following;
        console.log('data ===>', data);
      },
      error => {
        console.error(error);
      }
    );
  }

  unFollow(user) {
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
