import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { Routes, RouterModule } from '@angular/router';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ToDoListComponent } from './to-do-list/to-do-list.component';

import { ToDoListAddButtonComponent } from './to-do-list/add-button/add-button.component';
import { ToDoListItemComponent } from './to-do-list/item/item.component';
import { ToDoListItemConfigurationMenuComponent } from './to-do-list/item-configuration-menu/item-configuration-menu.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToDoListComponent,
    ToDoListItemComponent,
    ToDoListAddButtonComponent,
    ToDoListItemConfigurationMenuComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
