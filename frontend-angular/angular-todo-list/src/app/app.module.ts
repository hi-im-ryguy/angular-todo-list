import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ToDoListComponent } from './to-do-list/to-do-list.component';

import { ToDoListAddButtonComponent } from './to-do-list/add-button/add-button.component';
import { ToDoListItemComponent } from './to-do-list/item/item.component';
import { ToDoListItemConfigurationMenuComponent } from './to-do-list/item-configuration-menu/item-configuration-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoListItemComponent,
    ToDoListAddButtonComponent,
    ToDoListItemConfigurationMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
