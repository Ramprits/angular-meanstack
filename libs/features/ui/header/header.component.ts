import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '@myworkspace/core';
import { TokenService } from '@myworkspace/core/services/token-service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent extends BaseComponent
  implements OnInit, AfterViewInit {
  isVisible = false;
  userToken: any;
  user: any;
  constructor(private tokenService: TokenService, private router: Router) {
    super();
  }
  ngAfterViewInit(): void {}
  ngOnInit() {
    const token = this.tokenService.GetPayLoad();
    if (token) {
      this.userToken = token;
    }
  }

  logout() {
    this.tokenService.DeleteToken();
    this.router.navigate(['/login']);
    this.userToken = null;
  }
}
