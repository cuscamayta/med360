import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './components/reports/reports.component';
import { ReportRoutingModule } from './report-routing.module';



@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportsModule { }
