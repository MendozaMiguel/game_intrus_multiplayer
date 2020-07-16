import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiClientService } from './api-client/api-client.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ApiClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
