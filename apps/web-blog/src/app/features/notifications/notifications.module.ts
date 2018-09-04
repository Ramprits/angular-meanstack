import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { AuthGuard } from '@myworkspace/core/services/auth/auth.guard';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: NotificationsComponent,
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [NotificationsComponent]
})
export class NotificationsModule {}
