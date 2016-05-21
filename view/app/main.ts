import {bootstrap}    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS,Http} from '@angular/http';
import {AuthHttp,AuthConfig} from 'angular2-jwt';
import {provide} from '@angular/core';

import 'rxjs/add/operator/map';

import {AppComponent} from './app.component';
import {AuthService} from './AuthService.service';

bootstrap(AppComponent, [ HTTP_PROVIDERS,AuthService,provide(AuthHttp, {
  useFactory: (http:Http) => {
    return new AuthHttp(new AuthConfig(), http);
  },
  deps: [Http]
})]);
