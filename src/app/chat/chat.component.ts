import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ChatService } from '../services/chat.service';

import { Chatroom } from '../models/chatroom.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatrooms$: Observable<Chatroom[]>;
  isLoading: boolean = true;
  routeParamName: string;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatrooms$ = this.chatService.getChatroom().valueChanges();
    this.chatrooms$.subscribe(() => this.isLoading = false);
  }

}
