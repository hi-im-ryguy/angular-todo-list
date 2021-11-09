import { Component, OnInit } from '@angular/core';
import { DataService } from "./data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  message:string = "Does this work?";
  subscription!: Subscription;
  toDoListID:number = 0;

  toDoList: any[] = [
    {
      id: this.toDoListID,
      task: "New Task " + this.toDoListID,
      isCompleted: false,
      dueDate: new Date()
    },
    // {
    //   id: NaN,
    //   task: "Old Task",
    //   isCompleted: false
    // },
    // {
    //   id: NaN,
    //   task: "New Task 2",
    //   isCompleted: false
    // }
  ];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddToDoItem() {
    this.toDoList.push(
      {
        id: ++this.toDoListID,
        task: "New Task " + this.toDoListID,
        isCompleted: false
      }
    );
  }
}
