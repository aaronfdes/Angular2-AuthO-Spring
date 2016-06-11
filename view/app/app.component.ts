import {Component} from '@angular/core';
import {ToolbarComponent} from './toolbar.component';
import {AuthService} from './AuthService.service';
import {AuthHttp} from 'angular2-jwt';
import {Http,Headers} from '@angular/http';

@Component({
    selector: 'my-app',
    directives:[ToolbarComponent],
    template:  `
    <h1>Welcome to Angular2 with Auth0</h1>
    <toolbar></toolbar>
    <button (click)="sayHello()">Say Hello</button>
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" 
              *ngIf="_auth.loggedIn()" (click)="saySecrertHello()">Say Secret Hello</button>
    <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored" 
              *ngIf="_auth.loggedIn()" (click)="callTwitter()"><i class="material-icons">add</i></button>    
    {{message}}
  `
})
export class AppComponent {

  public message:string;
  public firstHeaders = new Headers();

  constructor(private _auth:AuthService,private _authHttp:AuthHttp,private _http:Http) {
    this.firstHeaders.append('Access-Control-Allow-Origin', '*');
  }

  sayHello(){
    this._http.get('http://localhost:8080/test/sayHello')
      .subscribe(
        data =>{console.log(data);this.message = data.text();},
        err => console.log(err),
        () => console.log('Complete unsecured hello')
      );
  }

  saySecrertHello(){

    this._authHttp.get('http://www.localhost:8080/secured/securedHello',this.firstHeaders)
      .subscribe(
        data =>{console.log(data);this.message = data.text();},
        err => console.log(err),
        () => console.log('Complete seccured hello')
      );
  }

  callTwitter(){
    this._authHttp.get('https://api.twitter.com/1.1/statuses/user_timeline.json',this.firstHeaders)
      .subscribe(
        data =>{console.log(data);this.message = data.text();},
        err => console.log(err),
        () => console.log('Completed twitter call')
      );
  }

}


