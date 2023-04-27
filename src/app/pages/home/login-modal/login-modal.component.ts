import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.sass']
})

export class LoginModalComponent  implements OnInit{
  submitted: boolean = false;
  isModalOpen = false;
  formValues: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })
  
  @Output() onCloseLoginModal:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder) { };

  closeModal() {
    this.onCloseLoginModal.emit();
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    this.submitted = true;
    //TODO: REQUETTE HTTP
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
