import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { ChatBoxComponent } from './chat/chat-box/chat-box.component';
import { ChatStartComponent } from './chat/chat-start/chat-start.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'chat', component: ChatComponent, children: [
    { path: '', component: ChatStartComponent, pathMatch: 'full' },
    { path: ':chatroom', component: ChatBoxComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
