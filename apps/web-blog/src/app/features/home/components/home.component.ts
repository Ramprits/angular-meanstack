import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '@myworkspace/core';
import { TokenService } from '@myworkspace/core/services/token-service/token.service';

@Component({
  selector: 'scope-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {}
}
