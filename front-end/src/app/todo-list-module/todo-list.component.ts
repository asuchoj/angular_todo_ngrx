import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service'
import { Store } from '@ngrx/store';
import { TodoPage, paginationTasks, Pagination } from './interfaces/interface';
import { switchMap, mergeMap, map, tap, first, last } from 'rxjs/operators';
import { GetTasks } from './redux/tasks/todo-list.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  tasks: paginationTasks;
  pagination: Pagination;

  page: number = this.store.source['value'].pagination.page;
  count: number = this.store.source['value'].pagination.count;

  constructor(
    private store: Store<TodoPage>, private todoServise: TodoService) { }

  ngOnInit() {
    this.todoServise.getTasks(this.page, this.count).pipe(
      tap(() => console.log('start')),
      tap(paginationTasks => this.store.dispatch(new GetTasks(paginationTasks.tasks, paginationTasks.pages)))
    ).subscribe()

    this.store.select('pagination').subscribe(pagination => {
      this.pagination = pagination;
      console.log('pagination')
    });

    this.store.select('todoPage').subscribe(pagination => {
      this.tasks = pagination;
      console.log('todoPage')
    });
  }
}
