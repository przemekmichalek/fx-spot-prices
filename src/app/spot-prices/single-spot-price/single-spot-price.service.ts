import {Injectable} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {SpotStateService} from "../state/spot-state.service";
import {catchError, Observable, take, tap} from "rxjs";
import {InstrumentName, Instruments} from "../../models";
import {ErrorService} from "../../error";

@Injectable()
export class SingleSpotPriceService {

  constructor(
    private apiService: ApiService,
    private spotState: SpotStateService,
    private errorService: ErrorService
  ) {
  }

  public getSingleSpot(instrument: Instruments): Observable<unknown> {
    return this.apiService.getLatestPrice(instrument).pipe(
      tap(price => this.spotState.setSinglePrice(price, instrument)),
      take(1),
      catchError(e => {
        this.errorService.setError(`Error to get ${InstrumentName[instrument]}`);
        return e;
      })
    );
  }
}
