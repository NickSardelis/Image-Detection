import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router, UrlSegment } from '@angular/router';
import {applyActionCode, getAuth} from 'firebase/auth'
import { ErrorComponent } from '../error/error.component';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { initializeApp } from '@angular/fire/app';
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {
  constructor (
    public authService: AuthService,
    public router :Router,
    private dialog : MatDialog,
    
  ) { }
      

  

  getBackToSignIn = () => {
    this.router.navigate(['signin'])
 }

}
