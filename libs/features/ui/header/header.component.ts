import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@myworkspace/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent extends BaseComponent implements OnInit {
  isVisible = false;
  constructor() {
    super();
  }

  ngOnInit() {}
}
