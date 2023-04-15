import { Component, OnInit, inject } from '@angular/core';
import { Observable, combineLatest, map, retry, startWith } from 'rxjs';
import { ApiService } from '../shared/api.service';
import { FormControl } from '@angular/forms';
import { Country } from '../shared/models/summary.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// Object which defines how many times stream will retry and with what delay
const retryValue = { count: 2, delay: 4000 };

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
// Summary component present summary for each country
export class SummaryComponent implements OnInit {
  // Dependecy Injection
  api: ApiService = inject(ApiService);
  modalService: NgbModal = inject(NgbModal);
  // Variables
  filter: FormControl = new FormControl('');
  countries$!: Observable<Country[]>;
  filter$!: Observable<string>;
  filteredCountry$!: Observable<Country[]>;
  page: number = 1;
  pageSize: number = 5;
  itemsPerPageArray: number[] = [5, 10, 15, 20];
  key: string = '';
  reverse: boolean = false;
  chartCountry!: Country;

  ngOnInit(): void {
    this.countries$ = this.api.getSummary().pipe(
      map((e) => e.Countries),
      retry(retryValue)
    );
    // User input stream
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    // Combine to stream to filter countries by user input
    this.filteredCountry$ = combineLatest(this.countries$, this.filter$).pipe(
      map(([countires, filterString]) =>
        countires.filter(
          (country) =>
            country.Country.toLocaleLowerCase().indexOf(
              filterString.toLocaleLowerCase()
            ) != -1
        )
      )
    );
  }
  // Getters & Setters for table size
  get _pageSize() {
    return this.pageSize;
  }

  set _pageSize(value: number) {
    this.pageSize = value;
    this.page = 1;
  }

  sort(key: string): void {
    this.key = key;
    this.reverse = !this.reverse;
  }

  // Function used for opening modal with chart
  open(content: any, object: Country): void {
    this.chartCountry = object;
    this.modalService.open(content, { centered: true });
  }
}
