import { Injectable } from '@angular/core';

import { Message } from '../models/message.model';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private afs: AngularFirestore) { }

  sendMessage(message: Message) {

    // this.db.collection('chat').add(message);
  }

  getMessages(chatroom: string) {
    return this.afs.collection(`${chatroom}`);
  }

  getTimeStamp() {
    const now = new Date();
    const date = `${now.getUTCFullYear()}/${now.getUTCMonth() + 1}/${now.getUTCDate()}`;
    const time = `${now.getUTCHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()}`;

    return (date + ' ' + time);
  }
}
