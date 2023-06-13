import { Component } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.sass']
})
export class BudgetComponent {
  showModal = false;

  handleShowModal = () => {
    this.showModal = true;
  }
  handleCloseModal = () => {
    this.showModal = false;
  }

  handleClick = (event:Event) => {
    event.stopPropagation();
  }
}
