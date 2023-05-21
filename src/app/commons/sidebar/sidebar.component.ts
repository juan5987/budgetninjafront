import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

    elementsListe = document.querySelectorAll("#maListe li");
  
    attachEventListeners() {
      this.elementsListe.forEach((element) => {
        element.addEventListener("mouseover", () => {
          element.classList.add("highlight");
        });
  
        element.addEventListener("mouseout", () => {
          element.classList.remove("highlight");
        });
  
        element.addEventListener("click", () => {
          element.classList.toggle("highlight");
        });
      });
    }
  }
