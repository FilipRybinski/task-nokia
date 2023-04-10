import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { retry } from 'rxjs';
import { makeUrl } from '../shared/urlMaker';
const retryValue={count:2, delay: 4000};
@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent {
  api=inject(ApiService);
  formBuilder=inject(FormBuilder);
  countries$=this.api.getCountries().pipe(retry(retryValue));
  data$=this.api.getDayOne('https://api.covid19api.com/dayone/country/south-africa/status/confirmed').pipe(retry(retryValue));
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
  Search(){
    this.data$=this.api.getDayOne(makeUrl(this.form)).pipe(retry(retryValue));
    this.form.reset();
  }
}
