import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.sass']
})
export class SignupModalComponent implements OnInit {
  isModalOpen = false;
  submitted: boolean = false;

  isConfirmed = (input: FormControl) => {
    const email = this.formValues?.get('email')?.value;
    const emailConfirm = this.formValues?.get('emailConfirm')?.value;
    const isConfirmed = email === emailConfirm;
    return isConfirmed ? null : { notConfirmed: true };
  }

  formValues: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email, this.isConfirmed]],
    emailConfirm: ['', [Validators.required, Validators.email, this.isConfirmed]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    passwordConfirm: ['', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*()])(?=.*[A-Z])(?=.*[a-z]).+$")]],
  })



  @Output() onCloseSignupModal:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder) { };

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
