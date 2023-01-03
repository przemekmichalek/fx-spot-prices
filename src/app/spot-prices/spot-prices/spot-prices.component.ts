import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {PriceModel} from "../../models";
import {SpotStateService} from "../state/spot-state.service";
import {SpotPricesService} from "./spot-prices.service";

@Component({
  selector: 'app-spot-prices',
  templateUrl: './spot-prices.component.html',
  styleUrls: ['./spot-prices.component.scss'],
  providers: [SpotPricesService]
})
export class SpotPricesComponent implements OnInit {

  public spots: Observable<Array<PriceModel>>;

  constructor(private spotStateService: SpotStateService, private spotPricesService: SpotPricesService) {
    this.spots = this.spotStateService.getSpotState().pipe(
      map(state => Object.values(state))
    );
  }

  public ngOnInit(): void {
    this.spotPricesService.getAllSpots().subscribe()
  }

  public trackPrice(index: number, item: PriceModel){
    return item.timestamp;
  }
}
