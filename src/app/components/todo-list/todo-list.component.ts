import { Component } from '@angular/core';
import { TodoService } from './services/todo.service'
import { Store } from '@ngrx/store';
import { TodoPage } from './interfaces/interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent{
  tasks: any[];

  constructor(private todoService: TodoService, private store: Store<TodoPage>) {
    this.store.select('todoPage').subscribe(todoPage => this.tasks = todoPage.tasks)
  }
}
