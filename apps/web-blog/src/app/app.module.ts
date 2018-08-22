import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// libs
import { AuthModule } from '@myworkspace/features/ui/auth/auth.module';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerModule } from 'ngx-spinner';
// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@myworkspace/features/ui/header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/services/token-interceptor';

@NgModule({
  imports: [
    CoreModule,
    BrowserAnimationsModule, // required animations module
    SharedModule,
    AppRoutingModule,
    AuthModule,
    NgxSpinnerModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class AppModule {}
