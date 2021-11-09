import { EventEmitter } from "@angular/core";
import { Injectable } from "@angular/core";
import { ToDo } from "src/models/ToDo.model";

@Injectable()
export class ToDoListService {
  toDoList: ToDo[] = []
  toDoListCounter: number = 0;

  response = {
    toDoList : [
    new ToDo(1, 'poop', false),
    new ToDo(2, 'Task', false),
    new ToDo(3, 'Task', false),
    new ToDo(4, 'Task', false),
    new ToDo(5, 'Task', false)
    ],
    toDoListCounter : 6
  }
  onAddNewToDo = new EventEmitter<ToDo>();

  addNewToDo(id: number) {
    this.toDoList.push(new ToDo(id, 'New Task', false));
    this.toDoListCounter++;
  }

  loadToDoList() {
    this.toDoList = this.response.toDoList;
    this.toDoListCounter = this.response.toDoListCounter;
  }

  logResponse() {
    console.log(this.response.toDoList[0].task);
  }

  saveToDoById(newToDo: ToDo) {
    for (let i = 0; i < this.toDoList.length; i++) {
      if (this.toDoList[i].id == newToDo.id) this.toDoList[i] = newToDo;
    }
  }
}