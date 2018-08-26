import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SideNavModule } from '../side-nav/side-nav.module';
import { AuthGuard } from '@myworkspace/core/services/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: PeopleComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxSpinnerModule,
    SideNavModule
  ],
  declarations: [PeopleComponent]
})
export class PeopleModule {}
