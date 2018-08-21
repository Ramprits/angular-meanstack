import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '@myworkspace/core';

@Component({
  selector: 'scope-home',
  templateUrl: 'home.component.html',
  styles:[]
})
export class HomeComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {}
}
