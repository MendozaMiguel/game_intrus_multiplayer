import { API_URI_RATINGS } from './../api-client/api-client.service';
import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client/api-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public apiClientService: ApiClientService) { }

  ngOnInit() {
    this.apiClientService.get(API_URI_RATINGS).toPromise().then(data => {
      console.log('Ratings : ', data);
    });
  }
}
