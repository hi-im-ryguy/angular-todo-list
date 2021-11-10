import { EventEmitter } from "@angular/core";
import { Injectable } from "@angular/core";
import { ToDo } from "src/models/ToDo.model";
import { HttpService } from "../auth/http.service";

@Injectable()
export class ToDoListService {
  toDoList: ToDo[] = []
  toDoListCounter: number = 0;

  response = {
    toDoList : [],
    toDoListCounter : 0
  }

  constructor(
    private httpService : HttpService
  ) {}

  onAddNewToDo = new EventEmitter<ToDo>();

  addNewToDo(toDoCounter: number) {
    this.httpService.addNewToDo(toDoCounter).subscribe((data) => {
      console.log(data);
    });
    this.toDoList.push(new ToDo(this.toDoListCounter++, 'New Task', false));
  }

  loadToDoList(responseToDo: ToDo[], responseToDoCounter: number) {
    this.toDoList = responseToDo;
    this.toDoListCounter = responseToDoCounter;
  }

  saveToDoById(newToDo: ToDo) {
    this.httpService.updateToDo(newToDo).subscribe();

    for (let i = 0; i < this.toDoList.length; i++) {
      if (this.toDoList[i].id == newToDo.id) this.toDoList[i] = newToDo;
    }
  }
}