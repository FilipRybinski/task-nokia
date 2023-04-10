import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
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
  title = 'task-nokia';
  api=inject(ApiService);
  summary$=this.api.getSummary().pipe(retry(retryValue));
  ngOnInit(): void {

  }

}
