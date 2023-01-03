import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Instruments, MapEntity, PriceModel} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class SpotStateService {

  private spotState$: BehaviorSubject<MapEntity<PriceModel>> = new BehaviorSubject<MapEntity<PriceModel>>({});

  public getSpotState(): Observable<MapEntity<PriceModel>> {
    return this.spotState$;
  }

  public setState(spotList: Array<PriceModel>): void {
    const state: MapEntity<PriceModel> = {};
    spotList.forEach(spot => {
      state[spot.instrumentName] = spot;
    })
    this.spotState$.next(state)
  }

  public setSinglePrice(price: PriceModel, instrumentName: Instruments): void {
    const currentState = this.spotState$.getValue();
    this.spotState$.next({
      ...currentState,
      [instrumentName]: price
    })
  }
}
