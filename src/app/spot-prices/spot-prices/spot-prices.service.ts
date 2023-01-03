import {Injectable} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {SpotStateService} from "../state/spot-state.service";
import {catchError, Observable, take, tap} from "rxjs";
import {ErrorService} from "../../error/error.service";

@Injectable()
export class SpotPricesService {

  constructor(
    private apiService: ApiService,
    private spotState: SpotStateService,
    private errorService: ErrorService
  ) {
  }

  public getAllSpots(): Observable<unknown> {
    return this.apiService.getAllPrices().pipe(
      tap(spots => this.spotState.setState(spots)),
      take(1),
      catchError(e => {
        this.errorService.setError(e);
        return e;
      })
    );
  }
}
