import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  isMenuOpened:boolean = false;
  isMenuOpenedSubject = new Subject<boolean>();
  isLoginModalOpened:boolean = false;
  isLoginModalOpenedSubject = new Subject<boolean>();
  isSignupModalOpened:boolean = false;
  isSignupModalOpenedSubject = new Subject<boolean>();

  constructor() { }

  get isMenuOpenedGetter():boolean {
    return this.isMenuOpened;
  }

  get isLoginModalOpenedGetter():boolean {
    return this.isLoginModalOpened;
  }

  get isSignupModalOpenedGetter():boolean {
    return this.isSignupModalOpened;
  }

  set isMenuOpenedSetter(bool:boolean) {
    this.isMenuOpened = bool;
    this.isMenuOpenedSubject.next(bool);
  }

  set isLoginModalOpenedSetter(bool:boolean) {
    this.isLoginModalOpened = bool;
    this.isLoginModalOpenedSubject.next(bool);
  }

  set isSignupModalOpenedSetter(bool:boolean) {
    this.isSignupModalOpened = bool;
    this.isSignupModalOpenedSubject.next(bool);
  }
}
