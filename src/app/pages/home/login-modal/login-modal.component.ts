import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.sass']
})
export class LoginModalComponent {
  isModalOpen = false;
  @Output() onCloseLoginModal:EventEmitter<boolean> = new EventEmitter<boolean>();

  closeModal() {
    this.onCloseLoginModal.emit();
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    console.log('submit');
  }

  stopPropagation(e: Event) {
    e.stopPropagation();
  }
}
