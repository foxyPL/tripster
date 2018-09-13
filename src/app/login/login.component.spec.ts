import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '@app/core';
import { LoginComponent } from './login.component';
import { Angulartics2AppInsightsExtended } from '@app/core/ai.service';
import { MockAngulartics2AppInsightsExtended } from '@app/core/ai.service.mock';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule.forRoot(), RouterTestingModule, TranslateModule.forRoot(), ReactiveFormsModule, CoreModule],
      providers: [{ provide: Angulartics2AppInsightsExtended, useClass: MockAngulartics2AppInsightsExtended }],
      declarations: [LoginComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
