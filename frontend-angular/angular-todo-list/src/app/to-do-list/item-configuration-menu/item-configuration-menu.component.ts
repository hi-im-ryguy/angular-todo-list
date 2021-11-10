import { Component, OnInit, Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDoListService } from '../to-do-list.service';

import { ToDo } from '../../../models/ToDo.model';

@Component({
  // selector: 'to-do-list-item-configuration-menu',
  templateUrl: 'item-configuration-menu.component.html',
  styleUrls: ['./item-configuration-menu.component.css']
})

export class ToDoListItemConfigurationMenuComponent implements OnInit {
  @Input() toDo!: ToDo;
  @ViewChild('save') myDiv!: ElementRef;

  MAX_LENGTH: number = 255;

  constructor(
    @Inject(MAT_DIALOG_DATA) public passedData: ToDo,
    private dialogReference : MatDialogRef<ToDoListItemConfigurationMenuComponent>,
    private toDoListService : ToDoListService
  ) { }

  ngOnInit() {

  }

  onSave(newTask: string, newIsCompleted: boolean) {
    let newToDo = new ToDo(this.passedData.id, newTask, newIsCompleted);
    this.toDoListService.saveToDoById(newToDo);
    this.dialogReference.close();
  }

  delete(iD: number) {
    if(confirm("Are you sure to delete this task?")) {
      console.log("Implement delete functionality here");
      this.toDoListService.deleteToDoById(iD);
      this.dialogReference.close();
    } else {
      this.dialogReference.close();
    }
  }
}