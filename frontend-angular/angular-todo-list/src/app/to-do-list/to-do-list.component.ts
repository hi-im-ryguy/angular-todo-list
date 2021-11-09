import { Component, OnInit } from '@angular/core';
import { HttpService } from '../auth/http.service';

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
  toDoCounter = 0;

  constructor(
    private httpService: HttpService
  ) {

  }

  ngOnInit(): void {
    this.httpService.sendGetRequest().subscribe((data: any) => {
      console.log(data);
    })
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
