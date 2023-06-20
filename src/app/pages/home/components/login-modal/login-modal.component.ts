import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { FormService } from './services/form.service';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private formBuilder: FormBuilder, private service: HomeService, private FormService: FormService ) { };

  closeModal() {
    this.service.isLoginModalOpenedSetter = false;
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
      this.closeModal();
      this.router.navigate(['/budget']);

    }
  }

  openSignupModal() {
    this.closeModal();
    this.service.isSignupModalOpenedSetter = true;
    this.service.isMenuOpenedSetter = false;
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
