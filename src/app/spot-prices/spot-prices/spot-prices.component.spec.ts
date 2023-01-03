import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SpotPricesComponent} from './spot-prices.component';
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {SingleSpotPriceComponent, SingleSpotPriceModule} from "../single-spot-price";
import {RouterTestingModule} from "@angular/router/testing";
import {By} from "@angular/platform-browser";

describe('SpotPricesComponent', () => {
  let component: SpotPricesComponent;
  let fixture: ComponentFixture<SpotPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([]),
        MatTableModule,
        SingleSpotPriceModule
      ],
      declarations: [SpotPricesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initially display all spots', () => {
    const spotsElements = fixture.debugElement.queryAll(By.directive(SingleSpotPriceComponent));

    expect(spotsElements.length).toBe(3)
  })

});
