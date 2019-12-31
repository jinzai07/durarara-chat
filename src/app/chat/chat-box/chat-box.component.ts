import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { ChatService } from 'src/app/services/chat.service';
import { Message } from 'src/app/models/message.model';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  isLoading: boolean = true;
  messages$: Observable<Message[]>;

  constructor(private chatService: ChatService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(routeParam => {
      this.chatService.getMessages(routeParam.chatroom);
      this.messages$ = this.chatService.messageCollection.valueChanges();
      this.messages$.subscribe(() => this.isLoading = false);
    });
  }

}
