import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { TodoPage, TodoState } from '../interfaces/interface';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/interface';
import { mergeMap } from 'rxjs/operators';

import { PaginationActionTypes } from '../redux/actions/pagination.actions';
import { TodoActionTypes, GetTasks } from '../redux/actions/todo.actions';

@Injectable({ providedIn: 'root' })
export class TodoService {

  private URl = 'http://localhost:5000/api/tasks';

  pagination = PaginationActionTypes;

  todoActionsType = TodoActionTypes;

  constructor(private http: HttpClient, private store: Store<TodoPage>) {
  }

  reFetchTasks(from: number = 1, count: number = 5, filterParam?: string) {
    return this.http.get<TodoState>(this.URl, {
      params: new HttpParams()
        .set('from', from + '')
        .set('count', count + '')
        .set('filterParam', filterParam)
    });
  }

  getTasks(from: number, count: number): Observable<TodoState> {
    return this.reFetchTasks(from, count);
  }

  addTask(body: Task): Observable<string> {
    return this.http.post<string>(this.URl, body);
  }

  editTask(body: Task): Observable<any> {
    return this.http.put<any>(this.URl, body);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete<any>(this.URl, { params: new HttpParams().set('id', id) });
  }

  changeStatus(id: string): Observable<any> {
    return this.http.patch<any>(this.URl, { id: id });
  }

  filteredTasks(filter?: string): Observable<any> {
    return this.reFetchTasks(1, this.store.source['value'].pagination.count, filter).pipe(
      mergeMap((state: TodoState) => {
        return [
          { type: this.pagination.ResetPage },
          {
            type: this.todoActionsType.GET_TASKS,
            tasks: state.tasks,
            pages: state.pages
          }
        ];
      })
    );
  }

  reLoadTasks(page?: number, count?: number): Observable<any> {
    return this.reFetchTasks(page, count, this.store.source['value'].todo.filter).pipe(
      mergeMap((state: TodoState) => {
        this.store.dispatch(new GetTasks(state.tasks, state.pages));
        return [
          {
            type: this.todoActionsType.GET_TASKS,
            tasks: state.tasks,
            pages: state.pages
          }
        ];
      })
    );
  }
}
