import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { SharedModule } from './../../@pages/components/shared.module';
import { SidebarComponent } from './../../@pages/components/sidebar/sidebar.component';
import { HeaderComponent } from './../../@pages/components/header/header.component';
import { SearchOverlayComponent } from '../../@pages/components/search-overlay/search-overlay.component';
import { QuickviewComponent } from '../../@pages/components/quickview/quickview.component';
import { FormsModule } from '@angular/forms';
import { pgTabsModule } from '../../@pages/components/tabs/tabs.module';




@NgModule({
  declarations: [ContainerComponent, SidebarComponent, HeaderComponent, SearchOverlayComponent],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    SharedModule,
    FormsModule,
    pgTabsModule
  ]
})
export class ContainerModule { }
