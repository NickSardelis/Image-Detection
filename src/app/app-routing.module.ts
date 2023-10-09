import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ImageLinkComponent } from './image-link/image-link.component';


const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'app', component: ImageLinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
