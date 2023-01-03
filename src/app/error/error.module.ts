import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    ErrorComponent
  ],
  exports: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatButtonModule
  ]
})
export class ErrorModule { }
