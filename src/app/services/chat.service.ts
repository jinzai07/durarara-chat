import { Injectable } from '@angular/core';

import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  sendMessage(message: Message) {
    console.log(message+ this.getTimeStamp());
  }

  getTimeStamp() {
    const now = new Date();
    const date = `${now.getUTCFullYear()}/${now.getUTCMonth() + 1}/${now.getUTCDate()}`;
    const time = `${now.getUTCHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()}`;

    return (date + ' ' + time);
  }
}
