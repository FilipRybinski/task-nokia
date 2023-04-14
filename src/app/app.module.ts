import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import {OrderModule} from 'ngx-order-pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingNotifierComponent } from './loading-notifier/loading-notifier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from './cases/counter/counter.component';
import { CasesComponent } from './cases/cases.component';
import { LackValuePipe } from './shared/pipes/lack-value.pipe';
import { FormComponent } from './cases/form/form.component';
import { SummaryComponent } from './summary/summary.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartComponent } from './summary/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingNotifierComponent,
    CounterComponent,
    CasesComponent,
    LackValuePipe,
    FormComponent,
    SummaryComponent,
    NavbarComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    OrderModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
