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

  addNewToDo() {
    try {
      this.httpService.addNewToDo().then((data) => {
        this.toDoList.push(new ToDo(data, 'New Task', false));
      }, (error) => {
        alert("Request Failed.");
      });
    }
    catch {
      alert("Request Failed.");
    }
  }

  loadToDoList(responseToDo: ToDo[], responseToDoCounter: number) {
    this.toDoList = responseToDo;
    this.toDoListCounter = responseToDoCounter;
  }

  async saveToDoById(newToDo: ToDo) {
    let worked = false;
    await this.httpService.updateToDo(newToDo).subscribe((data) => {
      for (let i = 0; i < this.toDoList.length; i++) {
        if (this.toDoList[i].id == newToDo.id) {
          this.toDoList[i] = newToDo;
          break;
        }
      }
      worked = true
    }, (error) => {
      alert("Save request failed.");
    });
    return worked;
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