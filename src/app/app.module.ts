import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { NgTiltModule } from '@geometricpanda/angular-tilt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ImageLinkComponent } from './image-link/image-link.component';
import { FaceRecogComponent } from './face-recog/face-recog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgParticlesModule } from "ng-particles";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { VerifyComponent } from './verify/verify.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ErrorComponent } from './error/error.component'


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavigationComponent,
    ImageLinkComponent,
    FaceRecogComponent,
    SigninComponent,
    SignupComponent,
    VerifyComponent,
    ErrorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgTiltModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgbModule,
    NgParticlesModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    MatDialogModule
    
  ],
  exports: [
    LogoComponent,
    NavigationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
