import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,

    children: [
      {
        path: 'cover',
        loadChildren: './../cover/cover.module#CoverModule'
      },
      {
        path: 'projects',
        loadChildren: './../projects/projects.module#ProjectsModule'
      },
      {
        path: 'organization',
        loadChildren: './../organization/organization.module#OrganizationModule'
      },
      {
        path: 'catalog',
        loadChildren: './../catalogs/catalogs.module#CatalogsModule'
      },
      {
        path: 'messages',
        loadChildren: './../messages/messages.module#MessagesModule'

      },
      {
        path: 'reports',
        loadChildren: './../reports/reports.module#ReportsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
