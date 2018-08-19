import { NgModule } from '@angular/core';

// libs
import { AuthModule } from '@myworkspace/features/ui/auth/auth.module';

// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@myworkspace/features/ui/header/header.component';

@NgModule({
  imports: [CoreModule, SharedModule, AppRoutingModule, AuthModule],
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
