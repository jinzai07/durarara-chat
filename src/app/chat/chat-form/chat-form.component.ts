import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  messageForm: FormGroup

  constructor(private fb: FormBuilder, private chatService: ChatService) { }

  ngOnInit() {
    this.initializeForm();
  }

  onSendMessage(): void {
    this.chatService.sendMessage(this.messageForm.value);
    this.messageForm.patchValue({message: ''});
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
