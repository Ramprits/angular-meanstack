import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '@myworkspace/core';
import { PostService } from '../../../core/services/post.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PostModel } from '@myworkspace/core/model/post.model';
import * as moment from 'moment';
import * as io from 'socket.io-client';
import { environment } from 'apps/web-blog/src/environments/environment';
import { TokenService } from '@myworkspace/core/services/token-service/token.service';
const base_url = environment.api_url;
import * as _ from 'lodash';
import { Router } from '@angular/router';
@Component({
  selector: 'scope-home',
  templateUrl: 'home.component.html',
  styles: []
})
export class HomeComponent extends BaseComponent implements OnInit {
  posts: PostModel[];
  user: any;
  socket: any;
  constructor(
    private ps: PostService,
    private ngxLoading: NgxSpinnerService,
    private ts: ToastrService,
    private tokenService: TokenService,
    private router: Router
  ) {
    super();
    this.socket = io(base_url);
  }
  ngOnInit() {
    this.user = this.tokenService.GetPayLoad();
    this.geAllPosts();
    this.socket.on('refreshPage', data => {
      this.geAllPosts();
    });
  }

  timeFromNow(time) {
    return moment(time).fromNow();
  }

  geAllPosts() {
    try {
      this.ngxLoading.show();
      setTimeout(() => {
        this.ps.findAll().subscribe(
          post => {
            this.posts = post.posts;
            this.ngxLoading.hide();
          },
          () => {
            this.ngxLoading.hide();
          }
        );
      }, 10);
    } catch (error) {
      this.ts.error(error.message);
    }
  }
  checkInArray(arr, username) {
    return _.some(arr, { username: username });
  }
  onLike(like) {
    this.ps.addLike(like).subscribe(data => {
      this.socket.emit('refresh', {});
    });
  }

  addComment(data: any) {
    this.router.navigate(['/home', data._id]);
  }
}
