import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class ChatService {
  private url = 'http://localhost:1337';
  private socket;

    constructor() {
        this.socket = io(this.url);
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
