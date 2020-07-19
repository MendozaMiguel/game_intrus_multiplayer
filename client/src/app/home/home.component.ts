import { API_URI_RATINGS } from './../api-client/api-client.service';
import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client/api-client.service';
import { ChatService } from '../chat.service.ts/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message: string;
  messages: string[] = [];

  constructor(public apiClientService: ApiClientService, private chatService: ChatService) { }

    sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    // this.apiClientService.get(API_URI_RATINGS).toPromise().then(data => {
    //   console.log('Ratings : ', data);
    // });

    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
      });
  }

  showMessages() {
    console.log('this.messages : ', this.messages);
  }
}
