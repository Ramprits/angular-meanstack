import { Component, OnInit } from '@angular/core';
// xplat
import { AppBaseComponent } from '@myworkspace/web';
import { Router } from '@angular/router';
import { TokenService } from '@myworkspace/core/services/token-service/token.service';

@Component({
  selector: 'scope-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent implements OnInit {
  constructor(private router: Router, private tokenService: TokenService) {
    super();
  }
  ngOnInit() {
    const token = this.tokenService.GetToken();
    if (token) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
