import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {
  isMenuOpened: boolean = false;

  handleToggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
