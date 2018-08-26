import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HOME_COMPONENTS, HomeComponent, CommentComponent } from './components';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SideNavModule } from '../side-nav/side-nav.module';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':id',
    component: CommentComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    NgxSpinnerModule,
    SideNavModule
  ],
  declarations: [...HOME_COMPONENTS],
  exports: [...HOME_COMPONENTS]
})
export class HomeModule {}
