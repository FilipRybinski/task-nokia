import { Component, OnInit, inject } from '@angular/core';
import { Observable, combineLatest, map, retry, startWith } from 'rxjs';
import { ApiService } from '../shared/api.service';
import { FormControl } from '@angular/forms';
import { Country } from '../shared/models/summary.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
const retryValue={count:2, delay: 4000};
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit{
  
  api:ApiService=inject(ApiService);
  modalService:NgbModal=inject(NgbModal);
  filter:FormControl=new FormControl('');
  countries$!:Observable<Country[]>
  filter$!:Observable<string>;
  filteredCountry$!:Observable<Country[]>;
  page:number=1;
  pageSize:number=5;
  itemsPerPageArray:number[]=[5,10,15,20];
  key:string='';
  reverse:boolean=false;
  chartCountry!:Country;
  ngOnInit(): void {
    this.countries$=this.api.getSummary().pipe(map(e=>e.Countries),retry(retryValue));
    this.filter$=this.filter.valueChanges.pipe(startWith(''));
    this.filteredCountry$=combineLatest(this.countries$,this.filter$).
    pipe(map(([countires,filterString])=>countires.filter(country=>country.Country.toLocaleLowerCase().indexOf(filterString.toLocaleLowerCase())!=-1)));
  }
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
  open(content:any,object:Country) {
    this.chartCountry=object;
    this.modalService.open(content,{ centered: true});
  }
  
}
