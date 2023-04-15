import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryId } from './models/countryId.model';
import { Summary } from './models/summary.model';
import { Cases } from './models/case.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // Return stream of available countries in api
  getCountries() {
    return this.http.get<CountryId[]>(`https://api.covid19api.com/countries`);
  }

  // Return global summary
  getSummary() {
    return this.http.get<Summary>(`https://api.covid19api.com/summary`);
  }

  // Return stream of specified url
  getDataByUrl(url: string) {
    return this.http.get<Cases[]>(url);
  }
}
