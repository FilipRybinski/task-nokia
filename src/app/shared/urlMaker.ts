import { FormGroup } from '@angular/forms';
// Create url using data from form and return it
export function makeUrl(form: FormGroup) {
  var baseUrl = 'https://api.covid19api.com';

  if (form.value.total) {
    baseUrl += '/total';
  }

  if (!form.value.from && !form.value.to) {
    baseUrl += `/dayone`;
  }

  if (form.value.country) {
    baseUrl += `/country/${form.value.country}`;
  }

  if (form.value.status) {
    baseUrl += `/status/${form.value.status}`;
  }

  if (form.value.live) {
    baseUrl += `/live`;
  }

  if (form.value.from && form.value.to) {
    // Convert date in format d/m/y to acceptable in api
    baseUrl += `?from=${new Date(form.value.from).toISOString()}&to=${new Date(
      form.value.to
    ).toISOString()}`;
  }

  return baseUrl;
}
