import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import {FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signup : FormGroup
  constructor (
    public authService: AuthService,
    private formBuilder : FormBuilder
  ) {}
  ngOnInit() {
    this.signup = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      username : ['', [Validators.required]],
      password : ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword : [null, [Validators.required ]]
    } , {validators: this.passwordMatchingValidator})
  }

  public passwordMatchingValidator(c: AbstractControl) {
    const password = c.get('password').value;

    const confirmPassword = c.get('confirmPassword').value;

    if (password !== confirmPassword) {
        c.get('confirmPassword').setErrors({notMatch: true});
    } else {
        return null;
    }
  }

   
  get f() { return this.signup.controls; }

}
