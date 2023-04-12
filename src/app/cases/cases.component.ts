import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { Observable, retry } from 'rxjs';
import { Cases } from '../shared/models/case.model';

const retryValue={count:2, delay: 4000};
@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit{
  api=inject(ApiService);
  formBuilder=inject(FormBuilder);
  countries$=this.api.getCountries().pipe(retry(retryValue));
  data$=this.api.getDayOne('https://api.covid19api.com/dayone/country/south-africa/status/confirmed').pipe(retry(retryValue));
  page:number=1;
  pageSize:number=5;
  itemsPerPageArray:number[]=[5,10,15,20];
  ngOnInit(): void {

  }
  get _pageSize(){
    return this.pageSize;
  }
  set _pageSize(value:number){
    this.pageSize=value;
    this.page=1;
  }
  assignData(data:Observable<Cases[]>){
    this.data$=data;
  }
}
