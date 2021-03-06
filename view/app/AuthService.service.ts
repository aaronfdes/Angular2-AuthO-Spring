/**
 * Created by aaron on 18/5/16.
 */
// services/auth.service.ts
import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';

// We want to avoid any 'name not found'
// warnings from TypeScript
declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  lock = new Auth0Lock('client id', 'domain');
  userDetails:UserDetails;

  constructor(){}

  login() {

    this.lock.show((error: string, profile: Object, id_token: string) => {
      if (error) {
        console.log(error);
      }
      //ducktype the profile objecct to userDetails
      this.userDetails =<UserDetails>JSON.parse(JSON.stringify(profile));
      // We get a profile object for the user from Auth0
      localStorage.setItem('profile', JSON.stringify(profile));
      // We also get the user's JWT
      localStorage.setItem('id_token', id_token);
    });
  }

  logout() {
    // To log out, we just need to remove
    // the user's profile and token
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }

  loggedIn() {
    return tokenNotExpired();
  }

  getUser(){
    return this.userDetails.email;
  }

}

/*
interface to hold any user details we want to get from the profile
 */
interface UserDetails{
  email:string;
}
