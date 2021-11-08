import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToDoListItemComponent } from './to-do-list/to-do-list-item/to-do-list-item.component';
import { ToDoListAddButtonComponent } from './to-do-list/to-do-list-add-button/to-do-list-add-button.component'

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoListItemComponent,
    ToDoListAddButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
