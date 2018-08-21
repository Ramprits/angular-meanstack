import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@myworkspace/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../../core/services/post.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-postcreate',
  templateUrl: 'post-create.component.html'
})
export class PostCreateComponent extends BaseComponent implements OnInit {
  postForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private ps: PostService,
    private ts: ToastrService
  ) {
    super();
  }

  ngOnInit() {
    this.postForm = this.fb.group({
      post: ['']
    });
  }

  onSave(postdata: any) {
    this.ps.addPost(postdata).subscribe(data => {
      this.ts.success(data.message);
    });
  }
}
