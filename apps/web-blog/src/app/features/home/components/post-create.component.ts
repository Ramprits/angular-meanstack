import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@myworkspace/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../../core/services/post.service';
import { ToastrService } from 'ngx-toastr';
import * as io from 'socket.io-client';
import { environment } from 'apps/web-blog/src/environments/environment';
const base_url = environment.api_url;
@Component({
  selector: 'app-postcreate',
  templateUrl: 'post-create.component.html'
})
export class PostCreateComponent extends BaseComponent implements OnInit {
  socket: any;
  postForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private ps: PostService,
    private ts: ToastrService
  ) {
    super();
    this.socket = io(base_url);
  }

  ngOnInit() {
    this.postForm = this.fb.group({
      post: ['']
    });
  }

  onSave(postdata: any) {
    this.ps.save(postdata).subscribe(data => {
      this.socket.emit('refresh', {});
      this.ts.success(data.message);
      this.postForm.reset();
    });
  }
}
