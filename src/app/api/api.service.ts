import {Injectable} from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {Instruments, PriceModel} from "../models";

let stubCount: number = 3;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public getAllPrices(): Observable<Array<PriceModel>> {
    return of([
      {
        id: 1, instrumentName: 'EURUSD', bid: 1.1000, ask: 1.2000, timestamp: new Date().toString()
      },
      {
        id: 2, instrumentName: 'EURJPY', bid: 119.60, ask: 119.90, timestamp: new Date().toString()
      },
      {
        id: 3, instrumentName: 'GBPUSD', bid: 1.2500, ask: 1.2560, timestamp: new Date().toString()
      }
    ])
  }

  public getLatestPrice(instrument: Instruments): Observable<PriceModel> {
    stubCount++;
    if(stubCount % 10 === 0){
      return throwError(() => 'test error')
    }
    const rand = Math.random() < 0.5 ? ((1-Math.random()) * (4-1) + 1) : (Math.random() * (4-1) + 1)
    const randomBid = +(rand).toFixed(4)
    return of({
      id: stubCount, instrumentName: instrument, bid: randomBid, ask: randomBid + 0.1, timestamp: new Date().toString()
    })
  }
}
