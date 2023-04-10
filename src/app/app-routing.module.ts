import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CasesComponent } from './cases/cases.component';

const routes: Routes = [
  {redirectTo:'cases',path:'',pathMatch:'full'},
  {path:'cases',component:CasesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
