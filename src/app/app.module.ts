import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent }  from './app.component';
import {HeroDetailComponent} from "./view/hero-detail/hero-detail.component";
import {HeroListComponent} from "./view/hero-list/hero-list.component";
import {Logger} from "./service/logger.service";
import {LoggerComponent} from "./view/logger/logger.component";

@NgModule({
  imports:      [
    BrowserModule, FormsModule,
  ],
  declarations: [
    AppComponent, HeroListComponent, HeroDetailComponent,
    LoggerComponent,
  ],
  bootstrap:    [ AppComponent ],
  providers: [Logger],
})
export class AppModule { }
