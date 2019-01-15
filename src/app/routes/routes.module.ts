import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [HomeComponent, PatientSearchComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule
  ]
})
export class RoutesModule { }
