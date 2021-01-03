import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoverComponent } from './components/cover/cover.component';

const routes: Routes = [{
  path: '',
  component: CoverComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoverRoutingModule { }
