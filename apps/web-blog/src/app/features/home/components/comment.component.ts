import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@myworkspace/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../../core/services/post.service';
import { ToastrService } from 'ngx-toastr';
import * as io from 'socket.io-client';
import * as moment from 'moment';
import { environment } from 'apps/web-blog/src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
const base_url = environment.api_url;

@Component({
  selector: 'app-comment',
  templateUrl: 'comment.component.html'
})
export class CommentComponent extends BaseComponent implements OnInit {
  socket: any;
  postId: any;
  commentForm: FormGroup;
  comments: any;
  post: string;
  constructor(
    private fb: FormBuilder,
    private ps: PostService,
    private ts: ToastrService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    super();
    this.socket = io(base_url);
    this.postId = this.activatedRouter.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.commentForm = this.fb.group({
      comment: ['', [Validators.required]]
    });
    this.getPost();
    this.socket.on('refreshPage', data => {
      this.getPost();
    });
  }
  getPost() {
    this.ps.findOne(this.postId).subscribe(data => {
      this.post = data.post.post;
      this.comments = data.post.comments.reverse();
    });
  }
  onSave() {
    if (this.commentForm.valid) {
      this.ps
        .addComment(this.postId, this.commentForm.value.comment)
        .subscribe(data => {
          this.socket.emit('refresh', {});
          this.ts.success(data.message);
          this.commentForm.reset();
        });
    } else {
      this.ts.error('Please enter comment');
    }
  }
  timeFromNow(time) {
    return moment(time).fromNow();
  }
}
