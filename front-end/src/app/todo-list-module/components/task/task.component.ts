import { Component, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import { Task, TodoPage } from '../../interfaces/interface'
import { RemoveTask, EditTask, CompletedTask } from '../../redux/todo-list.actions';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task;

  constructor(private store: Store<TodoPage>, private todoService: TodoService) { }

  editTask(){
    this.store.dispatch(new EditTask(this.task))
  }

  deleteTask(){
    this.todoService.deleteTask(this.task.id).subscribe();
  }

  completedTask(){
    this.todoService.changeStatus(this.task.id).subscribe();
  }
}
