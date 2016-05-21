/**
 * Created by aaron on 18/5/16.
 */
import {Component} from '@angular/core';
import {AuthService} from './AuthService.service';

@Component({
  selector: 'toolbar',
  template: `
    <div class="toolbar">
      <button *ngIf="!auth.loggedIn()" (click)="auth.login()">Login</button>
      <button *ngIf="auth.loggedIn()" (click)="auth.logout()">Logout</button>
      <div *ngIf="auth.loggedIn()">
        Welcome {{auth.getUser()}}
      </div>
    </div>
  `
})
export class ToolbarComponent {

  constructor(private auth: AuthService) {}

}
