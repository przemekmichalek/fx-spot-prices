import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SingleSpotPriceComponent} from './single-spot-price.component';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {DisplaySpotNameModule} from "./display-spot-name/display-spot-name.module";


@NgModule({
  declarations: [
    SingleSpotPriceComponent
  ],
  exports: [
    SingleSpotPriceComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    DisplaySpotNameModule
  ]
})
export class SingleSpotPriceModule {
}
