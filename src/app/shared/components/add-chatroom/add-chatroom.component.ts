import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';

import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-add-chatroom',
  templateUrl: './add-chatroom.component.html',
  styleUrls: ['./add-chatroom.component.css']
})
export class AddChatroomComponent implements OnInit {
  newChatroom: FormGroup;

  constructor(private chatService: ChatService,
              private fb: FormBuilder,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  onCreateChatroom(): void {
    this.chatService.createChatroom(this.newChatroom.value);
    this.matDialog.closeAll();
  }

  private initializeForm(): void {
    this.newChatroom = this.fb.group({
      name: [null, Validators.required]
    })
  }
}
