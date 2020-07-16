import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutes } from './home.routes';
import { ApiClientService } from '../api-client/api-client.service';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    RouterModule.forChild(HomeRoutes),
    CommonModule
  ],
  providers: [ApiClientService],
})
export class HomeModule { }
