import { Component, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import { Task, TodoPage } from '../../interfaces/interface'
import { RemoveTask, EditTask, CompletedTask } from '../../redux/todo-list.actions';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task;

  constructor(private store: Store<TodoPage>) { }

  editTask(){
    this.store.dispatch(new EditTask(this.task))
  }

  deleteTask(){
    this.store.dispatch(new RemoveTask(this.task.id))
  }

  completedTask(){
    this.store.dispatch(new CompletedTask(this.task.id))
  }
}
