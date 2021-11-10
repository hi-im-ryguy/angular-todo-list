import { EventEmitter } from "@angular/core";
import { Injectable } from "@angular/core";
import { ToDo } from "src/models/ToDo.model";

@Injectable()
export class ToDoListService {
  toDoList: ToDo[] = []
  toDoListCounter: number = 0;

  response = {
    toDoList : [],
    toDoListCounter : 0
  }
  onAddNewToDo = new EventEmitter<ToDo>();

  addNewToDo() {
    this.toDoList.push(new ToDo(this.toDoListCounter++, 'New Task', false));
  }

  loadToDoList(responseToDo: ToDo[], responseToDoCounter: number) {
    this.toDoList = responseToDo;
    this.toDoListCounter = responseToDoCounter;
  }

  saveToDoById(newToDo: ToDo) {
    for (let i = 0; i < this.toDoList.length; i++) {
      if (this.toDoList[i].id == newToDo.id) this.toDoList[i] = newToDo;
    }
  }
}