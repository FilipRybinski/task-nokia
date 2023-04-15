import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { Observable, retry } from 'rxjs';
import { Cases } from '../shared/models/case.model';
import { CountryId } from '../shared/models/countryId.model';
// Object which defines how many times stream will retry and with what delay
const retryValue = { count: 2, delay: 4000 };
@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss'],
})
// Cases component present cases of certain country
export class CasesComponent implements OnInit {
  // Dependecy Injection
  api: ApiService = inject(ApiService);
  formBuilder: FormBuilder = inject(FormBuilder);
  // Variables
  countries$!: Observable<CountryId[]>;
  data$!: Observable<Cases[]>;
  page: number = 1;
  pageSize: number = 5;
  itemsPerPageArray: number[] = [5, 10, 15, 20];
  key: string = '';
  reverse: boolean = false;

  ngOnInit(): void {
    this.countries$ = this.api.getCountries().pipe(retry(retryValue));
    this.data$ = this.api
      .getDataByUrl(
        'https://api.covid19api.com/dayone/country/south-africa/status/confirmed'
      )
      .pipe(retry(retryValue));
  }

  // Getters & Setters for table size
  get _pageSize() {
    return this.pageSize;
  }

  set _pageSize(value: number) {
    this.pageSize = value;
    this.page = 1;
  }

  // Assign fetched stream in form to main stream of data
  assignData(data: Observable<Cases[]>): void {
    this.data$ = data;
  }

  sort(key: string): void {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
