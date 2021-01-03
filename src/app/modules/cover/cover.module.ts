import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverComponent } from './components/cover/cover.component';
import { CoverRoutingModule } from './cover-routing.module';



@NgModule({
  declarations: [CoverComponent],
  imports: [
    CommonModule,
    CoverRoutingModule
  ]
})
export class CoverModule { }
