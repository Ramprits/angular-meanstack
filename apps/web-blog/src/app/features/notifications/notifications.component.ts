import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
import { environment } from 'apps/web-blog/src/environments/environment';
import { TokenService } from '@myworkspace/core/services/token-service/token.service';
import { UserService } from '@app/src/app/core/services/user.service';
import { Util } from '@app/src/app/shared/util';
const base_url = environment.api_url;

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  user: any;
  socket: any;
  display = false;
  notifications: any[];
  constructor(
    private tokenService: TokenService,
    private userService: UserService
  ) {
    this.socket = io(base_url);
  }

  ngOnInit() {
    this.user = this.tokenService.GetPayLoad();
    this.getNotifications();
    this.socket.on('refreshPage', () => {
      this.getNotifications();
    });
  }
  getNotifications() {
    this.userService.getUserById(this.user._id).subscribe(data => {
      this.notifications = data.result.notifications;
      console.log('notifications==>', this.notifications);
    });
  }
  showDialog() {
    this.display = true;
  }
  MarkNotification(data) {
    this.userService.MarkeNotification(data._id).subscribe(Data => {
      console.log(Data);
    });
  }
  DeleteNotification(data) {}
  timeFromNow(date: string): string {
    return Util.timeFromNow(date);
  }
}
