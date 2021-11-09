import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule, HttpErrorResponse, HttpParams, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private REST_API_SERVER_URL = "https://wg82pwg8e9.execute-api.us-west-1.amazonaws.com/default/to-do-list-rest-api";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER_URL);
  }
}