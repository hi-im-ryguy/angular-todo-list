import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import { DataService } from "../data.service";
import { Subscription } from 'rxjs';

@Component({
  // selector: 'to-do-list-item-configuration-menu',
  templateUrl: 'item-configuration-menu.component.html'
})

export class ToDoListItemConfigurationMenuComponent implements OnInit {
  @Input() toDo: { id: number; task: string; isCompleted: boolean; } = {id: 1, task: "ABC", isCompleted: false};

  @Output() newCreatedTask = new EventEmitter<{id: number; task: string; isCompleted: boolean;} >();

  message!:string;
  subscription!: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public passedData: {id: number; task: string; isCompleted: boolean;},
    private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(toDo => this.toDo = toDo)
    console.log('this.data init:>> ', this.data);
    console.log('this.message init:>> ', this.message);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newMessage() {
    this.data.changeMessage(
      {
        id: 200,
        task: "Wipe butt",
        isCompleted: false
      }
    )
    console.log('this.data :>> ', this.data);
  }

  onSave(newTask: string) {
    this.newCreatedTask.emit(
      {
        id: this.passedData.id,
        task: newTask,
        isCompleted: false
      }
    );
  }
}