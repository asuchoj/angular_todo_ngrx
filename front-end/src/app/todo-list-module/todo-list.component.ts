import { Component } from '@angular/core';
import { TodoService } from './services/todo.service'
import { Store } from '@ngrx/store';
import { TodoPage, paginationTasks } from './interfaces/interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  tasks: paginationTasks;

  constructor(private store: Store<TodoPage>, private todoServise: TodoService) {
    this.todoServise.getTasks(1, 5).pipe(
      switchMap(() => this.store.select('todoPage'))
    ).subscribe(todoPage => {
      this.tasks = todoPage;
      console.log(todoPage)
    })
  }
}
