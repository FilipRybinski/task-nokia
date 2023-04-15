import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CasesComponent } from './cases/cases.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { redirectTo: 'cases', path: '', pathMatch: 'full' },
  { path: 'cases', component: CasesComponent },
  { path: 'summary', component: SummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
