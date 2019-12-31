import { Injectable } from '@angular/core';

import { Message } from '../models/message.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messageCollection: AngularFirestoreCollection<Message>;
  chatroomName: string;

  constructor(private afs: AngularFirestore) { }

  getMessages(chatroom: string): AngularFirestoreCollection<Message> {
    this.messageCollection = this.afs.collection(`${chatroom}`, ref => ref.orderBy('timeStamp', 'desc'));
    this.chatroomName = chatroom;
    return this.afs.collection(`${chatroom}`);
  }

  sendMessage(message: Message): void {
    const payload: Message = message;
    payload.timeStamp = this.getTimeStamp();
    payload.displayName = 'test displayName';
    payload.chatroomName = this.chatroomName;

    this.messageCollection.add(payload);
  }

  getTimeStamp() {
    const now = new Date();
    const date = `${now.getUTCFullYear()}/${now.getUTCMonth() + 1}/${now.getUTCDate()}`;
    const time = `${now.getUTCHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()}`;

    return (date + ' ' + time);
  }
}
