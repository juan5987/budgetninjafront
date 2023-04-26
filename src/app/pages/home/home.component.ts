import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  // on initialise la variable isMenuOpened à false
  isMenuOpened:boolean = false;
  /**
   * une fonction qui permet de changer la valeur de la variable isMenuOpened
   * afin d'ouvrir ou de fermer le menu
   * @param bool un booléen qui permet de savoir si le menu est ouvert ou non
   */
  toggleMenu(bool:boolean) {
    this.isMenuOpened = bool;
  }
}
