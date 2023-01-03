import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SpotPricesComponent} from "./spot-prices.component";

const routes: Routes = [
  {
    path: '',
    component: SpotPricesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpotPricesRoutingModule {
}
