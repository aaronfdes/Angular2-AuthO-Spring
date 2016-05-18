import {Component} from '@angular/core';
import {ToolbarComponent} from './toolbar.component';

@Component({
    selector: 'my-app',
    directives:[ToolbarComponent],
    template:  `
    <h1>Welcome to Angular2 with Auth0</h1>
    <toolbar></toolbar>
  `
})
export class AppComponent {

  constructor() {}

}


