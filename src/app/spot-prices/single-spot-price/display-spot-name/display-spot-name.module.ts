import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisplaySpotNamePipe} from "./display-spot-name.pipe";


@NgModule({
  declarations: [
    DisplaySpotNamePipe
  ],
  exports: [
    DisplaySpotNamePipe
  ],
  imports: [
    CommonModule
  ]
})
export class DisplaySpotNameModule {
}
