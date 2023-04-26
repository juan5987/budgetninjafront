import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.sass']
})
export class HomeheaderComponent {
  // on récupère la variable isMenuOpened depuis le composant parent
  @Input() isMenuOpened:boolean=false;
  // on crée un évènement qui permettra de changer la valeur de la variable isMenuOpened depuis le composant parent
  @Output() onToggleMenu = new EventEmitter<boolean>();

  // on crée une fonction qui permet de changer la valeur de la variable isMenuOpened
  // afin d'ouvrir ou de fermer le menu
  handleToggleMenu():void {
    this.isMenuOpened = !this.isMenuOpened;
    this.onToggleMenu.emit(this.isMenuOpened);
  }
}
