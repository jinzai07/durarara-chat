import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { ChatService } from 'src/app/services/chat.service';
import { Message } from 'src/app/models/message.model';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  messageForm: FormGroup;
  messages: Observable<Message[]>;

  constructor(private fb: FormBuilder,
              private chatService: ChatService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  onSendMessage(): void {
    this.chatService.sendMessage(this.messageForm.value);
    this.messageForm.reset();
  }

  handleSubmit(event): void {
    if(event.keyCode === 13 && this.messageForm.valid) {
      this.onSendMessage();
    }
  }

  private initializeForm(): void {
    this.messageForm = this.fb.group({
      message: [null, Validators.required],
    })
  }
}
