import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  animal: string = "";
  name: string = "";
  task: string = "New Task"

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ToDoListItemConfigurationMenuComponent, {
      width: '30rem'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  checkBox() {
  }
}
