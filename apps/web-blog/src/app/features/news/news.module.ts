import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { NEWS_COMPONENTS } from './components';
import { NewsComponent } from './components/news.component';

export const routes: Routes = [
  {
    path: '',
    component: NewsComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...NEWS_COMPONENTS],
  exports: [...NEWS_COMPONENTS]
})
export class NewsModule {}
