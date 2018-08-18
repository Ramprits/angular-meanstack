import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@myworkspace/web';

@Component({
  selector: 'scope-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
