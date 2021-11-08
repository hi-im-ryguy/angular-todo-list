import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
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
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
