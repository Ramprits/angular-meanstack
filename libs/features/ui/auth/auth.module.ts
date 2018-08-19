import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { CoreModule } from '@myworkspace/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CoreModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [LoginComponent, RegisterComponent],
  declarations: [LoginComponent, RegisterComponent],
  providers: []
})
export class AuthModule {}
