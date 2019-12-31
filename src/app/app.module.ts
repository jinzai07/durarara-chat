import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatBoxComponent } from './chat/chat-box/chat-box.component';
import { ChatStartComponent } from './chat/chat-start/chat-start.component';
import { ChatFormComponent } from './chat/chat-form/chat-form.component';
import { HomepageComponent } from './homepage/homepage.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { environment } from 'src/environments/environment';

import { AuthService } from './services/auth.service';
import { ChatService } from './services/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ChatComponent,
    ChatBoxComponent,
    ChatStartComponent,
    ChatFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    AuthService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
