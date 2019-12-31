import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Observable } from 'rxjs';

import { ChatService } from '../services/chat.service';

import { Chatroom } from '../models/chatroom.model';

import { AddChatroomComponent } from '../shared/components/add-chatroom/add-chatroom.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatrooms$: Observable<Chatroom[]>;
  isLoading: boolean = true;
  routeParamName: string;

  constructor(private chatService: ChatService,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.chatrooms$ = this.chatService.getChatroom().valueChanges();
    this.chatrooms$.subscribe(() => this.isLoading = false);
  }

  onAddChatroom(): void {
    this.matDialog.open(AddChatroomComponent);
  }
}
