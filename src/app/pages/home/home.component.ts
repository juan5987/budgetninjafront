import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  // on initialise la variable isMenuOpened à false
  isMenuOpened:boolean = false;
  // on initialise la variable isLoginModalOpened à false
  isLoginModalOpened:boolean = false;
  isSignupModalOpened:boolean = false;
  /**
   * une fonction qui permet de changer la valeur de la variable isMenuOpened
   * afin d'ouvrir ou de fermer le menu
   * @param bool un booléen qui permet de savoir si le menu est ouvert ou non
   */
  openLoginModal() {
    this.isLoginModalOpened = true;
    this.isMenuOpened = false;
  }
  openSignupModal() {
    this.isSignupModalOpened = true;
    this.isMenuOpened = false;
  }
  closeLoginModal() {
    this.isLoginModalOpened = false;
  }
  closeSignupModal() {
    this.isSignupModalOpened = false;
  }

  toggleMenu(bool:boolean) {
    this.isMenuOpened = bool;
  }
}
