import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class CustomValidatorsService {

  isEmailConfirmed = (form: FormGroup) => {
    const email = form?.get('email')?.value;
    const emailConfirm = form?.get('emailConfirm')?.value;
    const isConfirmed = email === emailConfirm;
    return isConfirmed ? null : { emailNotConfirmed: true };
  }

  isPasswordConfirmed = (form: FormGroup) => {
    const password = form?.get('password')?.value;
    const passwordConfirm = form?.get('passwordConfirm')?.value;
    const isConfirmed = password === passwordConfirm;
    return isConfirmed ? null : { passwordNotConfirmed: true };
  }

  constructor() { }
}
