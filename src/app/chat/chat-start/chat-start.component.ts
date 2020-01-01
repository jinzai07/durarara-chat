import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { LoginComponent } from 'src/app/shared/components/login/login.component';

@Component({
  selector: 'app-chat-start',
  templateUrl: './chat-start.component.html',
  styleUrls: ['./chat-start.component.css']
})
export class ChatStartComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
    const dialogConfig = new MatDialogConfig;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.minWidth = '300px';

    this.matDialog.open(LoginComponent, dialogConfig);
  }

}
