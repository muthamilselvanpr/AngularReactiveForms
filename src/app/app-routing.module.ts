import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponentComponent } from './employee/list-component.component';
import { CreateComponentComponent } from './employee/create-component.component';


const routes: Routes = [
  {path:'list', component: ListComponentComponent },
  {path:'create', component: CreateComponentComponent },
  {path:'', redirectTo:'/list', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
