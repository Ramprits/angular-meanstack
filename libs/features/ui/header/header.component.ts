import {
  Component,
  OnInit,
  AfterViewInit,
  AfterContentInit
} from '@angular/core';
import { BaseComponent } from '@myworkspace/core';
import { TokenService } from '@myworkspace/core/services/token-service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent extends BaseComponent
  implements OnInit, AfterViewInit, AfterContentInit {
  loggedInUser: any;
  ngAfterContentInit(): void {}
  constructor(public tokenService: TokenService, private router: Router) {
    super();
  }
  ngAfterViewInit(): void {}
  ngOnInit() {
    this.loggedInUser = this.tokenService.GetPayLoad();
    console.log(this.tokenService.getUserName())
  }

  logout() {
    this.tokenService.DeleteToken();
    this.router.navigate(['/login']);
    this.loggedInUser = null;
  }
}
