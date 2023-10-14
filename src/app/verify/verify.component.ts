import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {
  constructor (
    public authService: AuthService,
    public router :Router,
    
  ) { }

  
  getBackToSignIn = () => {
    this.router.navigate(['signin'])
      // .then(() => {
      //   window.location.reload()
      // })
  }
}

