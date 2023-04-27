import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.sass']
})
export class SignupModalComponent {
  isModalOpen = false;
  
  @Output() onCloseSignupModal:EventEmitter<boolean> = new EventEmitter<boolean>();

  closeModal() {
    this.onCloseSignupModal.emit();
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    console.log('submit');
  }

  stopPropagation(e: Event) {
    e.stopPropagation();
  }
}
