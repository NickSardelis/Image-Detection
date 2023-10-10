import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { Observable } from 'rxjs';
import { state } from '@angular/animations';

@Injectable({
  providedIn: 'root',
})


export class authGuard {
  constructor ( public authService: AuthService, public router : Router) {}
  canActivate (next: ActivatedRouteSnapshot,state: RouterStateSnapshot):
    Observable<boolean> | Promise<Boolean> | UrlTree | boolean {
      if (this.authService.isLoggedin !== true) {
        this.router.navigate(['signin'])
      }
    

  
  return true;
    }}
