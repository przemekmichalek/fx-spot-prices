import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ErrorService} from "./error.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'fx-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit, OnDestroy {

  private subscription: Subject<void> = new Subject<void>();

  constructor(private _snackBar: MatSnackBar, private errorState: ErrorService) {
  }

  public ngOnInit(): void {
    this.errorState.getErrorState()
      .pipe(
        takeUntil(this.subscription)
      )
      .subscribe(error => {
        if(!error){
          return;
        }
        this._snackBar.open(error, 'close', {duration: 1000});
      })
  }

  public ngOnDestroy() {
    this.subscription.next();
    this.subscription.complete();
  }

}
