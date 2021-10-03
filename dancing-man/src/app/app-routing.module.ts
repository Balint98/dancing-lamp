import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DancingManComponent } from './dancing-man/dancing-man.component';

const routes: Routes = [
  { path: '', component: DancingManComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
