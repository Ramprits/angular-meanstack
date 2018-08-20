import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@myworkspace/core';
import { TokenService } from '@myworkspace/core/services/token-service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent extends BaseComponent implements OnInit {
  isVisible = false;
  token: any;
  constructor(private tokenService: TokenService) {
    super();
  }

  ngOnInit() {
    this.token = this.tokenService.GetToken();
  }

  logout() {
    this.tokenService.DeleteToken();
  }
}
