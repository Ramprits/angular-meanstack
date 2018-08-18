import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { STREAM_COMPONENTS } from './components';
import { StreamComponent } from './components/stream.component';

export const routes: Routes = [
  {
    path: '',
    component: StreamComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...STREAM_COMPONENTS],
  exports: [...STREAM_COMPONENTS]
})
export class StreamModule {}
