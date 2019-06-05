import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';

import { TodoService } from './services/todo.service'
import { TodoPage, TodoState, PaginationState } from './interfaces/interface';
import { GetTasks } from './redux/actions/todo.actions';
import { PAGINATION_SELECT, TODO_SELECT } from './constants/constants';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  todoState: TodoState;

  paginationState: PaginationState;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store<TodoPage>, private todoServise: TodoService) { }

  ngOnInit() {
    let page: number = this.store.source['value'].pagination.page;
    let count: number = this.store.source['value'].pagination.count;

    this.todoServise.getTasks(page, count).pipe(
      tap(state => this.store.dispatch(new GetTasks(state.tasks, state.pages)),
      takeUntil(this.destroy$)
    )).subscribe()

    this.store.select(PAGINATION_SELECT).pipe(takeUntil(this.destroy$)).subscribe(state => this.paginationState = state);

    this.store.select(TODO_SELECT).pipe(takeUntil(this.destroy$)).subscribe(state => this.todoState = state);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
