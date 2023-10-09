import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ImageLinkComponent } from './image-link/image-link.component';
import { VerifyComponent } from './verify/verify.component';
import { authGuard } from './shared/guard/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full' },
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'app', component: ImageLinkComponent, canActivate: [authGuard]},
  {path: 'verify', component: VerifyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
