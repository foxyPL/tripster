import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { Angulartics2Module } from 'angulartics2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { TripModule } from './trip/trip.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducer';
import { AppLoadModule } from './app-load/app-load.module';
import { Angulartics2AppInsightsExtended } from '@app/core/ai.service';
import {AboutModule} from './about/about.module';

@NgModule({
  imports: [
    AppLoadModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    HomeModule,
    AboutModule,
    LoginModule,
    TripModule,
    Angulartics2Module.forRoot([Angulartics2AppInsightsExtended]),
    AppRoutingModule,
    StoreModule.forRoot(reducers)
  ],
  declarations: [AppComponent],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
