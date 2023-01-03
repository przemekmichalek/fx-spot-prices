import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app.routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatMenuModule} from "@angular/material/menu";
import {ErrorModule} from "./error";
import {RouterTestingModule} from "@angular/router/testing";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        RouterModule,
        RouterTestingModule.withRoutes([]),
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatTooltipModule,
        MatMenuModule,
        ErrorModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
