import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingNotifierComponent } from './loading-notifier/loading-notifier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from './cases/counter/counter.component';
import { CasesComponent } from './cases/cases.component';
import { LackValuePipe } from './shared/pipes/lack-value.pipe';
import { FormComponent } from './cases/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingNotifierComponent,
    CounterComponent,
    CasesComponent,
    LackValuePipe,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
