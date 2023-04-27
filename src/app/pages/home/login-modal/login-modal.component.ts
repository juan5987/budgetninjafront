import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.sass']
})
export class LoginModalComponent {
  submitted: boolean = false;
  isModalOpen = false;
  @Output() onCloseLoginModal:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder) { };

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

  // Formulaire de connexion
  formValues: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]], // je peux mettre un ou plusieurs validateur(s)
    password: ['', Validators.required], // je peux mettre un ou plusieurs validateur(s)
  })
}
