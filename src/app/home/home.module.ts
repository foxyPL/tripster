import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { TranslateModule } from '@ngx-translate/core';
import { Angulartics2Module } from 'angulartics2';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, Angulartics2Module, HomeRoutingModule],
  declarations: [HomeComponent],
  providers: [QuoteService]
})
export class HomeModule {}
