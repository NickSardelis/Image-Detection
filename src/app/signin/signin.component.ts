import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { ReactiveFormsModule, FormControl ,FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signin : FormGroup
  constructor (
    public authService: AuthService,
    private formBuilder : FormBuilder
  ) {}
  ngOnInit() {
    this.signin = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  get f() { return this.signin.controls; }

}
