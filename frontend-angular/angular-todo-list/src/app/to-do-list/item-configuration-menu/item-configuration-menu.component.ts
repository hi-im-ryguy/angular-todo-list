import { Component, OnInit, Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDoListService } from '../to-do-list.service';

import { ToDo } from '../../../models/ToDo.model';
import { EnvironmentService } from 'src/environments/environment.service';

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
    private toDoListService: ToDoListService,
    public environmentService: EnvironmentService
  ) { }

  ngOnInit() {

  }

  // @TODO Fix a security issue here. The id can be modified in the DOM, and passed to the DB.
  onSave(newTask: string, newIsCompleted: boolean) {
    let newToDo = new ToDo(this.passedData.id, newTask, newIsCompleted);
    this.toDoListService.saveToDoById(newToDo).then((response) => {
      if (!response) this.dialogReference.close();
      else alert("Didn't save. Please try again.");
    })
  }
}