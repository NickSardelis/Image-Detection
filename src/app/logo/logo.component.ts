import { Component } from '@angular/core';
import { NgTiltModule } from '@geometricpanda/angular-tilt';
import { AuthService } from '../shared/services/auth.service';
@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
constructor(public authService :AuthService) {}
}
