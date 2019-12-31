import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  messages$: Observable<any>;

  constructor(private chatService: ChatService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(routeParam => {
      this.chatService.getMessages(routeParam.chatroom);
      this.messages$ = this.chatService.messageCollection.valueChanges();
    });
  }

}
