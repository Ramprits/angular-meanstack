import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import {
  NEWS_COMPONENTS,
  NewsDetailComponent,
  NewsComponent
} from './components';
import { NgxModule } from '@myworkspace/core/ngx/ngx.module';

export const routes: Routes = [
  {
    path: '',
    component: NewsComponent
  },
  {
    path: ':id',
    component: NewsDetailComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), NgxModule],
  declarations: [...NEWS_COMPONENTS],
  exports: [...NEWS_COMPONENTS]
})
export class NewsModule {}
