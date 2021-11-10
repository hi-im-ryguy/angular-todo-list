import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'
import { ToDo } from 'src/models/ToDo.model';
import { ToDoDTO } from 'src/DTOs/ToDo.DTO';
import { AuthService } from './auth.service';
import { ToDoListService } from '../to-do-list/to-do-list.service';

const httpHeaders = {
  headers: new HttpHeaders({
    // 'Content-Type': 'application/json',
    // 'Access-Control-Allow-Headers': 'Content-Type',
    // 'Access-Control-Request-Methods': 'DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT',
    // 'Access-Control-Request-Origin': '*',
    // Authorization: 'OTdOeet56BacQONhn2mDW5rILR2Ty5An1GSPg8h3'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private REST_API_SERVER_URL = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
  )
  { }

  async addNewToDo() {
    let response: any = await this.httpClient.get(this.REST_API_SERVER_URL + '/get-to-do-counter?id=' + this.authService.userId, httpHeaders).toPromise();
    let toDoID = response.Items[0].to_do_counter;
    let requestBody = {
      'to_do_counter': toDoID,
      'id': this.authService.userId
    }
    this.httpClient.put(this.REST_API_SERVER_URL + '/add-new-to-do', requestBody, httpHeaders).subscribe();
    return toDoID;
  }

  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER_URL + '/get-to-do-list?id=' + this.authService.userId, httpHeaders);
  }

  public updateToDo(newToDo: ToDo) {
    let toDoDTO = new ToDoDTO(newToDo.id, newToDo.task, newToDo.isCompleted);
    let number = newToDo.id;
    let requestBody = {
      'toDo': toDoDTO,
      'userId': this.authService.userId
    }
    return this.httpClient.put(this.REST_API_SERVER_URL + '/update-to-do', requestBody, httpHeaders);
  }
}