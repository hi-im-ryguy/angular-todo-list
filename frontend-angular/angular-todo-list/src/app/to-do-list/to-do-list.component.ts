import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  animal: string = "";
  name: string = "";
  toDoList: Object[] = [
    {
      "id": 1,
      "task": "Clean butt.",
      "dueDate": Date.now()
    },
    {
      "id": 2,
      "task": "Poop.",
      "dueDate": Date.now()
    }
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  onAddToDoItem() {
    this.toDoList.push(
      {
        "id": 1,
        "task": "Clean butt.",
        "dueDate": Date.now()
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ToDoListComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
