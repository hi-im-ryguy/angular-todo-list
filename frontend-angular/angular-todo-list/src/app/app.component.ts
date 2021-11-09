import { Component, OnInit } from '@angular/core';
import { ToDoListService } from './to-do-list/to-do-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-todo-list';
  copyRightYear = new Date().getFullYear() + 1;

  constructor(
  ) {}

  ngOnInit(): void {
  }
}
