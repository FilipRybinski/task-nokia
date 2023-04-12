import { Component, inject } from '@angular/core';
import { retry } from 'rxjs';
import { ApiService } from '../shared/api.service';
const retryValue={count:2, delay: 4000};
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  api=inject(ApiService);
  summary$=this.api.getSummary().pipe(retry(retryValue));
}
