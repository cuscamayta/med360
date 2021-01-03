import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './components/organization/organization.component';
import { OrganizationRoutingModule } from './organization-routing.module';



@NgModule({
  declarations: [OrganizationComponent],
  imports: [
    CommonModule,
    OrganizationRoutingModule
  ]
})
export class OrganizationModule { }
