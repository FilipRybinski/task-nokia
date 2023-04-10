import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from './shared/api.service';
import { Observable, catchError, map, retry, tap } from 'rxjs';
import { Cases } from './shared/models/case.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { makeUrl } from './shared/urlMaker';
const retryValue={count:2, delay: 4000};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  api=inject(ApiService);
  formBuilder=inject(FormBuilder);
  countries$=this.api.getCountries().pipe(retry(retryValue));
  summary$=this.api.getSummary().pipe(retry(retryValue));
  data$!:Observable<Cases[]>;
  form!:FormGroup;
  statusArray=['recovered','deaths','confirmed'];
  date: string = new Date().toISOString().split("T")[0];
  ngOnInit(): void {
   this.form=this.formBuilder.group({
      'country':[,Validators.required],
      'status':[],
      'live':[],
      'total':[],
      'from':[],
      'to':[]

    })
  }
  title = 'task-nokia';
  Search(){
    this.data$=this.api.getDayOne(makeUrl(this.form)).pipe(retry(retryValue));
    this.form.reset();
  }
}
