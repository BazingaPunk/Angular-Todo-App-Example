import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoNewItemComponent } from './todo-new-item/todo-new-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { CompletedItemComponent } from './completed-item/completed-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider'

@NgModule({
  declarations: [
    AppComponent,
    TodoNewItemComponent,
    TodoListComponent,
    TodoListItemComponent,
    CompletedItemComponent
  ],
  imports: [
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
