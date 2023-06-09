import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Observable, retry } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';
import { Cases } from 'src/app/shared/models/case.model';
import { CountryId } from 'src/app/shared/models/countryId.model';
import { makeUrl } from 'src/app/shared/urlMaker';
// Object which defines how many times stream will retry and with what delay
const retryValue = { count: 2, delay: 4000 };

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() countires!: CountryId[];
  @Output() newData = new EventEmitter<Observable<Cases[]>>();
  // Dependecy Injection
  api: ApiService = inject(ApiService);
  formBuilder: FormBuilder = inject(FormBuilder);
  // Variables
  form!: FormGroup;
  statusArray: string[] = ['recovered', 'deaths', 'confirmed'];
  date: string = new Date().toISOString().split('T')[0];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      country: [, Validators.required],
      status: [],
      live: [],
      total: [],
      from: [],
      to: [],
    });
  }

  // When form is valid fetch data and emit it to parent component 'cases'
  // Also close form in small view after submit a form.
  onSubmit(formHTML: FormGroupDirective): void {
    if (!this.form.valid) {
      return;
    }
    this.newData.emit(
      this.api.getDataByUrl(makeUrl(this.form)).pipe(retry(retryValue))
    );
    var button = document.getElementById('check') as HTMLInputElement;
    if (button != null) button.checked = false;
    formHTML.resetForm();
  }
}
