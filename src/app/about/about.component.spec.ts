import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AboutComponent} from './about.component';
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {RouterTestingModule} from "@angular/router/testing";

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([]),
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule
      ],
      declarations: [AboutComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
