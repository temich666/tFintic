import { Injectable } from '@angular/core';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {

  auth: FirebaseAuthState;
  ownerKey: string = '';
  currentMonth: string = '';

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

  setOwnerKey(ownerKey: string) {
    this.ownerKey = ownerKey;
    localStorage.setItem('tFintic-ownerKey', ownerKey);
  }

  getOwnerKey(): string {
    if (this.ownerKey) {
      return this.ownerKey;
    }
    return localStorage.getItem('tFintic-ownerKey') || '';
  }

  setCurrentMonth(currentMonth: string) {
    this.currentMonth = currentMonth;
    localStorage.setItem('tFintic-currentMonth', currentMonth);
  }

  getCurrentMonth(): string {
    if (this.currentMonth) {
      return this.currentMonth;
    }
    return localStorage.getItem('tFintic-currentMonth');
  }

}
