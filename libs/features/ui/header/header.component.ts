import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@myworkspace/core';
import { TokenService } from '@myworkspace/core/services/token-service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent extends BaseComponent implements OnInit {
  isVisible = false;
  token: any;
  user: any;
  constructor(private tokenService: TokenService, private router: Router) {
    super();
    this.token = this.tokenService.GetToken();
  }

  ngOnInit() {
    this.user = this.tokenService.GetPayLoad();
    console.log(this.user.username);
  }

  logout() {
    this.tokenService.DeleteToken();
    this.router.navigate(['/login']);
    this.token = null;
  }
}
