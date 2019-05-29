import { Component } from '@angular/core';
import { TodoService } from './services/todo.service'
import { Store } from '@ngrx/store';
import { TodoPage, Task } from './interfaces/interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent{
  tasks: Task[];

  constructor(private store: Store<TodoPage>) {
    this.store.select('todoPage').subscribe(todoPage => this.tasks = todoPage.tasks);
  }
}
