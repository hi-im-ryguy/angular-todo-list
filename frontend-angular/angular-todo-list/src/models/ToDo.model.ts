import { IToDo } from "./ToDo.interface";

export class ToDo implements IToDo {
  id: number;
  task: string;
  isCompleted: boolean;

  constructor(id: number, task: string, isCompleted: boolean) {
    this.id = id;
    this.task = task;
    this.isCompleted = isCompleted;
  }
}