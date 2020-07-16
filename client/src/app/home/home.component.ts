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
    console.log('IN HOME COMPONENT');
  }
}
