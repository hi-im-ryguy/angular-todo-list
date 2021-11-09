import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';

export interface DialogData {
  animal: string;
  name: string;
}

import { ToDoListItemConfigurationMenuComponent } from '../item-configuration-menu/item-configuration-menu.component';

@Component({
  selector: 'to-do-list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
  
export class ToDoListItemComponent implements OnInit {
  @Input() toDo: { id: number; task: string; isCompleted: boolean; } = {id: 100, task: 'Get this app running', isCompleted: false};
  // That '!' means that for any instance of this item component, toDo cannot be null. This way, the compiler doesn't complain about the possibility that it will be null.
  subscription!: Subscription;
  message!: string;

  constructor(
    public dialog: MatDialog, private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ToDoListItemConfigurationMenuComponent, {
      data: this.toDo,
      width: '30rem'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.task = result;
    });
  }

  updateItem(){

  }

  checkBox() {
  }
}
