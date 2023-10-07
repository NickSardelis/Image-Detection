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

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavigationComponent,
    ImageLinkComponent,
    FaceRecogComponent
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
    ReactiveFormsModule
  ],
  exports: [
    LogoComponent,
    NavigationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
