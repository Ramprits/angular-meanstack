// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// app
import { SharedModule } from './features/shared/shared.module';
import { LoginComponent } from '@myworkspace/features/ui/auth/login.component';
import { RegisterComponent } from '@myworkspace/features/ui/auth/register.component';
import { AuthGuard } from '@myworkspace/core/services/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './features/home/home.module#HomeModule'
  },
  {
    path: 'people',
    loadChildren: './features/people/people.module#PeopleModule'
  },
  {
    path: 'product',
    loadChildren: './features/product/product.module#ProductModule'
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
