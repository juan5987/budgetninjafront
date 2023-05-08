import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.sass']
})

export class LoginModalComponent  implements OnInit{
  submitted: boolean = false;
  formValues: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder, private service: HomeService) { };

  closeModal() {
    this.service.isLoginModalOpenedSetter = false;
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
