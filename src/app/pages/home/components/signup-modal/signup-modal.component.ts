import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomValidatorsService } from './services/custom-validators.service';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.sass']
})
export class SignupModalComponent implements OnInit {
  isModalOpen = false;
  submitted: boolean = false;
  showPassword: boolean = false;

  formValues: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
    email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    emailConfirm: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*()])(?=.*[A-Z])(?=.*[a-z]).+$/)]],
    passwordConfirm: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*()])(?=.*[A-Z])(?=.*[a-z]).+$/)]],
  }, {
    validators: [this.CustomValidatorsService.isEmailConfirmed, this.CustomValidatorsService.isPasswordConfirmed],
  })



  @Output() onCloseSignupModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder, private CustomValidatorsService: CustomValidatorsService, private FormService: FormService ) { };

  closeModal() {
    this.onCloseSignupModal.emit();
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    this.submitted = true;
    if (this.formValues.valid) {
      this.FormService.signup(this.formValues.value).subscribe(
        (response:any) => {
          console.log(response);
        }, (error:any) => {
          console.log(error);
        }
      )
    }
  }

  stopPropagation(e: Event) {
    e.stopPropagation();
  }

  handleToggleShowPassword() {
    this.showPassword = !this.showPassword;
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
