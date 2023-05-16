import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomValidatorsService } from './services/custom-validators.service';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.sass']
})
export class SignupModalComponent implements OnInit {
  isModalOpen = false;
  submitted: boolean = false;

  formValues: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
    email: ['juan.machado.5987@gmail.com', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    emailConfirm: ['juan.machado.5987@gmail.com', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    password: ['paD59!', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*()])(?=.*[A-Z])(?=.*[a-z]).+$/)]],
    passwordConfirm: ['paD59!', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*()])(?=.*[A-Z])(?=.*[a-z]).+$/)]],
  }, {
    validators: [this.service.isEmailConfirmed, this.service.isPasswordConfirmed],
  })



  @Output() onCloseSignupModal:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder, private service: CustomValidatorsService) { };

  closeModal() {
    this.onCloseSignupModal.emit();
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    this.submitted = true;
  }

  stopPropagation(e: Event) {
    e.stopPropagation();
  }

  ngOnInit() {
    this.formValues.valueChanges.subscribe(() => {
      this.submitted = false;
    })
  }

  public get form() {
    return this.formValues.controls;
  }
}
