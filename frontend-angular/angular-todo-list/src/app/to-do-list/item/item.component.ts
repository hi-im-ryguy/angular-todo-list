import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDoListService } from '../to-do-list.service';
import { ToDo } from '../../../models/ToDo.model';

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
  @Input() toDo!: { id: number; task: string; isCompleted: boolean; };
  // That '!' means that for any instance of this item component, toDo cannot be null. This way, the compiler doesn't complain about the possibility that it will be null.

  constructor(
    public dialog: MatDialog,
    private toDoListService : ToDoListService) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ToDoListItemConfigurationMenuComponent, {
      data: this.toDo,
      width: '25rem',
      height: '60vh',
      maxHeight: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.task = result;
    });
  }

  updateItem(){

  }

  checkBoxClicked(newIsCompleted: boolean) {
    let newToDo = new ToDo(this.toDo.id, this.toDo.task, newIsCompleted);
    this.toDoListService.saveToDoById(newToDo);
  }
}
