import {Component, Input, OnDestroy} from '@angular/core';
import {PriceModel} from "../../models";
import {interval, of, Subject, switchMap, takeUntil} from "rxjs";
import {SingleSpotPriceService} from "./single-spot-price.service";

@Component({
  selector: 'fx-single-spot-price',
  templateUrl: './single-spot-price.component.html',
  styleUrls: ['./single-spot-price.component.scss'],
  providers: [SingleSpotPriceService]
})
export class SingleSpotPriceComponent implements OnDestroy {

  private unsubscribe = new Subject<void>();
  @Input()
  public spot: PriceModel | undefined;

  @Input()
  public delay: number = 1;

  constructor(private singleSpotPriceService: SingleSpotPriceService) {
    interval((this.delay + 1) * 2000)
      .pipe(
        switchMap(() => {
          if (!this.spot?.instrumentName) {
            return of(null);
          }
          return this.singleSpotPriceService.getSingleSpot(this.spot.instrumentName);
        }),
        takeUntil(this.unsubscribe)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
