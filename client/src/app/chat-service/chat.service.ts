import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService, API_URI_USER } from '../api-client/api-client.service';

@Injectable()

export class ChatService {
  private url = 'http://localhost:1337';
  private socket;

  constructor(public apiClientService: ApiClientService) {
      this.socket = io(this.url);
  }

  public getUserConnected() {
    this.apiClientService.get(API_URI_USER).toPromise().then(users => {
      console.log('USERS : ', users);
      this.socket.emit('user-connected', users);
    });

  }

    public sendMessage(message) {
        this.socket.emit('new-message', message);
    }

    public getMessages() {
        return Observable.create(observer => {
            this.socket.on('new-message', (message) => {
                observer.next(message);
            });
        });
    }
}
