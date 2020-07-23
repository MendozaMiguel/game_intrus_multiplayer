import { RoomComponent } from './room.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomRoutes } from './room.routes';
import { ApiClientService } from '../api-client/api-client.service';
import { ChatService } from '../chat-service/chat.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RoomComponent],
  exports: [RoomComponent],
  imports: [
    RouterModule.forChild(RoomRoutes),
    CommonModule,
    FormsModule
  ],
  providers: [ApiClientService, ChatService],
})
export class RoomModule { }
