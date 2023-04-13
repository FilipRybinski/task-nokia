import { Component, inject } from '@angular/core';
import { Observable, combineLatest, map, retry, startWith } from 'rxjs';
import { ApiService } from '../shared/api.service';
import { FormControl } from '@angular/forms';
import { Country } from '../shared/models/summary.model';
const retryValue={count:2, delay: 4000};
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  api=inject(ApiService);
  filter:FormControl=new FormControl('');
  countries$=this.api.getSummary().pipe(map(e=>e.Countries),retry(retryValue));
  filter$:Observable<string>=this.filter.valueChanges.pipe(startWith(''));
  filteredCountry$:Observable<Country[]>=combineLatest(this.countries$,this.filter$).
  pipe(map(([countires,filterString])=>countires.filter(country=>country.Country.toLocaleLowerCase().indexOf(filterString.toLocaleLowerCase())!=-1)));
  page:number=1;
  pageSize:number=5;
  itemsPerPageArray:number[]=[5,10,15,20];
  key:string='';
  reverse:boolean=false;
  displayStyle:string="none";
  chartCountry!:Country;

  get _pageSize(){
    return this.pageSize;
  }
  set _pageSize(value:number){
    this.pageSize=value;
    this.page=1;
  }
  sort(key:string){
    this.key=key;
    this.reverse=!this.reverse;
  }
  openPopup(country:Country) {
    this.chartCountry=country;
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
