import { Component, OnInit } from '@angular/core';
import { ToDoListService } from './to-do-list/to-do-list.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-todo-list';
  copyRightYear = new Date().getFullYear();
  userId: number = 0;

  constructor(
  ) {}

  ngOnInit(): void {
  }

  loginClicked() {
    Swal.fire('Work in progress. Come back soon!')
  }
}
