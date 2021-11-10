import { ToDo } from "src/models/ToDo.model";

export class ToDoDTO {
  to_do_id: number;
  to_do: string;
  is_completed: boolean;

  constructor(id: number, task: string, isCompleted: boolean) {
    this.to_do_id = id;
    this.to_do = task.substring(0,255);
    this.is_completed = isCompleted;
  }

  convertToNative():ToDo {
    return new ToDo(this.to_do_id, this.to_do, this.is_completed);
  }
}