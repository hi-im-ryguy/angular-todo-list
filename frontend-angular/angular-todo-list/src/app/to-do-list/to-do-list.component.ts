import { Component, OnInit } from '@angular/core';
import { HttpService } from '../auth/http.service';
import { ToDoListService } from './to-do-list.service';

import { ToDo } from '../../models/ToDo.model'

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
      console.log(data);
    });

    // Load To Do's into To Do List
    this.toDoListService.loadToDoList();
    this.toDoList = this.toDoListService.toDoList;
    this.toDoCounter = this.toDoListService.toDoListCounter;
  }

  onAddToDoItem() {
    this.toDoListService.addNewToDo(this.toDoCounter);
  }
}
