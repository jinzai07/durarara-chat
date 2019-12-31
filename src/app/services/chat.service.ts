import { Injectable } from '@angular/core';

import { Message } from '../models/message.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Chatroom } from '../models/chatroom.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chatroomCollection: AngularFirestoreCollection<Chatroom>;
  messageCollection: AngularFirestoreCollection<Message>;
  chatroomName: string;

  constructor(private afs: AngularFirestore) { }

  createChatroom(name: Chatroom): void {
    let payload = name;
    payload.timeCreated = this.getTimeStamp();
    this.chatroomCollection.add(payload);
  }

  getMessages(chatroom: string): AngularFirestoreCollection<Message> {
    this.messageCollection = this.afs.collection('messages', ref => {
        return ref.where('chatroomName', '==', `${chatroom}`)
                  .orderBy('timeStamp', 'desc')
      })
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

  getChatroom(): AngularFirestoreCollection<Chatroom> {
    this.chatroomCollection = this.afs.collection('chatroom');
    return this.afs.collection('chatroom');
  }

  getTimeStamp() {
    const now = new Date();
    const date = `${now.getUTCFullYear()}/${now.getUTCMonth() + 1}/${now.getUTCDate()}`;
    const time = `${now.getUTCHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()}`;

    return (date + ' ' + time);
  }
}