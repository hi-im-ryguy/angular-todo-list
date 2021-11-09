import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject({} as any);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: Object) {
    this.messageSource.next(message)
  }

}