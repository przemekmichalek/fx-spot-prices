import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private errorState: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor() { }

  public setError(error: string): void{
    this.errorState.next(error);
  }

  public getErrorState(): Observable<string | null>{
    return this.errorState;
  }
}
