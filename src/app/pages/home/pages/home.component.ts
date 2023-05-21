import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy{
  isMenuOpened:boolean = false;
  isLoginModalOpened:boolean = false;
  isSignupModalOpened:boolean = false;
  subscription!: Subscription;

  constructor(private service: HomeService) { }

  ngOnInit() {
    this.subscription = this.service.isMenuOpenedSubject.subscribe(
      (bool:boolean) => {
        this.isMenuOpened = bool;
      });
    this.subscription = this.service.isLoginModalOpenedSubject.subscribe(
      (bool:boolean) => {
        this.isLoginModalOpened = bool;
      });
    this.subscription = this.service.isSignupModalOpenedSubject.subscribe(
      (bool:boolean) => {
        this.isSignupModalOpened = bool;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openLoginModal() {
    this.service.isLoginModalOpenedSetter = true;
    this.service.isMenuOpenedSetter = false;
  }
  openSignupModal() {
    this.service.isSignupModalOpenedSetter = true;
    this.service.isMenuOpenedSetter = false;
  }
  closeLoginModal() {
    this.service.isLoginModalOpenedSetter = false;
  }
  closeSignupModal() {
    this.service.isSignupModalOpenedSetter = false;
  }

  toggleMenu(bool:boolean) {
    this.service.isMenuOpenedSetter = bool;
  }
}
