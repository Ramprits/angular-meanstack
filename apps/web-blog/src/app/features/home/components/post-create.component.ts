import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@myworkspace/core';

@Component({
  selector: 'app-postcreate',
  templateUrl: 'post-create.component.html'
})
export class PostCreateComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
