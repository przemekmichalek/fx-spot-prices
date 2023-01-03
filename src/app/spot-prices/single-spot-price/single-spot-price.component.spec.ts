import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSpotPriceComponent } from './single-spot-price.component';
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {DisplaySpotNameModule} from "./display-spot-name/display-spot-name.module";

describe('SingleSpotPriceComponent', () => {
  let component: SingleSpotPriceComponent;
  let fixture: ComponentFixture<SingleSpotPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatCardModule,
        MatDividerModule,
        DisplaySpotNameModule
      ],
      declarations: [ SingleSpotPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSpotPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
