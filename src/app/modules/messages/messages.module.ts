import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { MessagesRoutingModule } from './messages-routing.module';



@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
