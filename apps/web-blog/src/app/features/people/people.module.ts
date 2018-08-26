import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SideNavModule } from '../side-nav/side-nav.module';

export const routes: Routes = [
  {
    path: '',
    component: PeopleComponent
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
