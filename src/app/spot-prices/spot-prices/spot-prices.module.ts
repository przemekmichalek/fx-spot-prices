import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpotPricesComponent} from './spot-prices.component';
import {SpotPricesRoutingModule} from "./spot-prices.routing.module";
import {MatTableModule} from "@angular/material/table";
import {SingleSpotPriceModule} from "../single-spot-price";


@NgModule({
  declarations: [
    SpotPricesComponent
  ],
  imports: [
    CommonModule,
    SpotPricesRoutingModule,
    MatTableModule,
    SingleSpotPriceModule
  ]
})
export class SpotPricesModule {
}
