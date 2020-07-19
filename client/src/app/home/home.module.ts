import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutes } from './home.routes';
import { ApiClientService } from '../api-client/api-client.service';
import { ChatService } from '../chat-service/chat.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    RouterModule.forChild(HomeRoutes),
    CommonModule,
    FormsModule
  ],
  providers: [ApiClientService, ChatService],
})
export class HomeModule { }
