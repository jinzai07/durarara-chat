import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatBoxComponent } from './chat/chat-box/chat-box.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ChatStartComponent } from './chat/chat-start/chat-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ChatComponent,
    ChatBoxComponent,
    ChatStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
