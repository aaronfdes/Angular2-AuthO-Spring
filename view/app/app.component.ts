import {Component} from '@angular/core';
import {ToolbarComponent} from './toolbar.component';
import {AuthService} from './AuthService.service';
import {AuthHttp} from 'angular2-jwt';

@Component({
    selector: 'my-app',
    directives:[ToolbarComponent],
    template:  `
    <h1>Welcome to Angular2 with Auth0</h1>
    <toolbar></toolbar>
    <button (click)="sayHello()">Say Hello</button>
    <button *ngIf="_auth.loggedIn()" (click)="saySecrertHello()">Say Secret Hello</button>
    {{message}}
  `
})
export class AppComponent {

  public message:string;

  constructor(private _auth:AuthService,private _authHttp:AuthHttp) {}

  sayHello(){
    this._authHttp.get('http://localhost:8080/test/sayHello')
      .subscribe(
        data =>{console.log(data);this.message = data.text();},
        err => console.log(err),
        () => console.log('Complete')
      );
  }

  saySecrertHello(){
    this._authHttp.get('http://localhost:8080/secured/securedHello')
      .subscribe(
        data =>{console.log(data);this.message = data.text();},
        err => console.log(err),
        () => console.log('Complete')
      );
  }

}


