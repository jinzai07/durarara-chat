import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ChatService } from 'src/app/services/chat.service';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  messageForm: FormGroup;
  messageCollection: AngularFirestoreCollection;
  messages: Observable<any>;

  constructor(private fb: FormBuilder,
              private chatService: ChatService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initializeForm();

    this.activatedRoute.params
    .subscribe(routeParam => {
      this.messageCollection = this.chatService.getMessages(routeParam.chatroom);
      this.messages = this.messageCollection.valueChanges();
    });

  }

  onSendMessage(): void {
    console.log('test send');
  }

  handleSubmit(event): void {
    if(event.keyCode === 13 && this.messageForm.valid) {
      this.onSendMessage();
    }
  }

  private initializeForm(): void {
    this.messageForm = this.fb.group({
      message: [null, Validators.required],
      displayName: 'Test name'
    })
  }
}
