import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  toDoList: any[] = [
    {
      id: NaN,
      task: "New Task",
      isCompleted: false,
      dueDate: new Date()
    },
    {
      id: NaN,
      task: "Old Task",
      isCompleted: false
    },
    {
      id: NaN,
      task: "New Task",
      isCompleted: false
    }
  ];

  constructor() {}

  ngOnInit(): void {
  }

  onAddToDoItem() {
    this.toDoList.push(
      {
        id: NaN,
        task: "New Task",
        isCompleted: false
      }
    );
  }
}
