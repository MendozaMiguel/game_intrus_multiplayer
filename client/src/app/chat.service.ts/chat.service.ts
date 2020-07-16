import * as io from 'socket.io-client';

export class ChatService {
  private url = 'http://localhost:1337';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }
}
