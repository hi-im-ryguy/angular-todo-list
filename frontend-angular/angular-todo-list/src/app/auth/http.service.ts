import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'

const httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Headers': 'Content-Type',
    // 'Access-Control-Allow-Methods': 'DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT',
    // 'Access-Control-Allow-Origin': '*',
    // Authorization: 'OTdOeet56BacQONhn2mDW5rILR2Ty5An1GSPg8h3'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private REST_API_SERVER_URL = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() {
    console.log("Is PROD: " + environment.production);

    return this.httpClient.get(this.REST_API_SERVER_URL + '/get-to-do-list?id=0');
  }
}