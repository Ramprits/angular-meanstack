import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '@myworkspace/core';
import { PostService } from '../../../core/services/post.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PostModel } from '@myworkspace/core/model/post.model';
import * as moment from 'moment';
import * as io from 'socket.io-client';
import { environment } from 'apps/web-blog/src/environments/environment';
const base_url = environment.api_url;
@Component({
  selector: 'scope-home',
  templateUrl: 'home.component.html',
  styles: []
})
export class HomeComponent extends BaseComponent implements OnInit {
  posts: PostModel[];
  socket: any;
  constructor(
    private ps: PostService,
    private ngxLoading: NgxSpinnerService,
    private ts: ToastrService
  ) {
    super();
    this.socket = io(base_url);
  }
  ngOnInit() {
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
        this.ps.findAll().subscribe(post => {
          this.posts = post.posts;
          this.ngxLoading.hide();
        });
      }, 1000);
    } catch (error) {
      this.ts.error(error.message);
    }
  }
}
