import { Component, OnInit } from '@angular/core';
import { HttpService } from '../auth/http.service';
import { ToDoListService } from './to-do-list.service';

import { ToDo } from '../../models/ToDo.model'
import { ToDoDTO } from 'src/DTOs/ToDo.DTO';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  toDoList: ToDo[] = [];
  toDoCounter: number = 0;

  constructor(
    private httpService: HttpService,
    private toDoListService: ToDoListService
  ) {}

  ngOnInit(): void {
    // Get Data with HTTP
    this.httpService.sendGetRequest().subscribe((data: any) => {
      let response = data.Items[0];
      let toDoDTOList: {} = response.to_do_list;

      let nativeToDoList: ToDo[] = [];
      let nativeToDoListCounter: number = response.to_do_counter;

      Object.entries(toDoDTOList).forEach(entry => {
        const key = Number(entry[0]);
        const value: any = entry[1];

        nativeToDoList.push(
          new ToDo(key, value.to_do, value.is_completed)
          // ^ Fix this so that you don't have to have a long constructor.
        )
      });

      // Load To Do's into To Do List
      this.toDoListService.loadToDoList(nativeToDoList, nativeToDoListCounter);

      this.toDoList = this.toDoListService.toDoList;
      this.toDoCounter = this.toDoListService.toDoListCounter;
    });

  }

  onAddToDoItem() {
    this.toDoListService.addNewToDo(this.toDoCounter);
  }
}
