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

  loadToDoList() {
    this.toDoList = this.response.toDoList;
    this.toDoListCounter = this.response.toDoListCounter;
  }

  saveToDoById(newToDo: ToDo) {
    for (let i = 0; i < this.toDoList.length; i++) {
      if (this.toDoList[i].id == newToDo.id) this.toDoList[i] = newToDo;
    }
  }
  
  deleteToDoById(deletedId: number) {
    for (let i = 0; i < this.toDoList.length; i++) {
      if (this.toDoList[i].id == deletedId)
      {
        this.toDoList.splice(i,1);
      }
    }
  }
}