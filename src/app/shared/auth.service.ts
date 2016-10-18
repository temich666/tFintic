import { Injectable } from '@angular/core';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {

  auth: FirebaseAuthState;

  constructor(public angularFire: AngularFire) {
    this.angularFire.auth.subscribe((auth) => {
      this.auth = auth;
    });
  }

  isLoggedIn(): boolean {
    return !!(this.auth && this.auth.uid);
  }

  login() {
    return this.angularFire.auth.login();
  }

  logout() {
    return this.angularFire.auth.logout();
  }

  get user(): FirebaseAuthState {
    return this.auth;
  }

}
