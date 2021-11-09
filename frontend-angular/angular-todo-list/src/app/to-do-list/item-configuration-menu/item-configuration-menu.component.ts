import { Component, OnInit, Input } from '@angular/core';

@Component({
  // selector: 'to-do-list-item-configuration-menu',
  templateUrl: 'item-configuration-menu.component.html'
})

export class ToDoListItemConfigurationMenuComponent implements OnInit {
  @Input() toDo!: { id: number; task: string; isCompleted: boolean; };

  constructor() {

  }

  ngOnInit() { }

  onSave() {

  }
}