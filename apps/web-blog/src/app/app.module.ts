import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// libs
import { AuthModule } from '@myworkspace/features/ui/auth/auth.module';
import { CookieService } from 'ngx-cookie-service';
// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@myworkspace/features/ui/header/header.component';

@NgModule({
  imports: [
    CoreModule,
    BrowserAnimationsModule, // required animations module
    SharedModule,
    AppRoutingModule,
    AuthModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent],
  providers: [CookieService]
})
export class AppModule {}
