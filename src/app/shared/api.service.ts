import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CountryId } from './models/countryId.model';
import { Summary } from './models/summary.model';
import { Cases } from './models/case.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) {}
  
  getCountries(){
    return this.http.get<CountryId[]>(`https://api.covid19api.com/countries`);
  }
  getSummary(){
    return this.http.get<Summary>(`https://api.covid19api.com/summary`);
  }
  getDayOne(url:string){

    return this.http.get<Cases[]>(url);
  }
}
  

