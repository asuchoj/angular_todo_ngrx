import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators'

import { TodoPage, paginationTasks } from '../interfaces/interface'
import { GetTasks, AddTask, RemoveTask, CompletedTask} from '../redux/todo-list.actions';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private URl = 'http://localhost:5000/api/tasks';
  public get GET_URl() {
    return this.URl;
  }

  constructor(private http: HttpClient, private store: Store<TodoPage>) { }

  getTasks(from: number, count: number): Observable<paginationTasks> {
    return this.http.get<paginationTasks>(this.URl, {
      params: new HttpParams()
        .set('from', from + '')
        .set('count', count + '')
    }).pipe(
      tap(tasks => this.store.dispatch(new GetTasks(tasks.tasks, tasks.pages)))
    )
  }

  addTask(body: Task): Observable<string> {
    return this.http.post<string>(this.URl, body).pipe(
      tap(id => {
        body.id = id;
        this.store.dispatch(new AddTask(body));
      })
    )
  }

  editTask(body: Task): Observable<any> {
    return this.http.put<any>(this.URl, body).pipe(
      tap(() => this.store.dispatch(new AddTask(body, true)))
    )
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete<any>(this.URl, {params: new HttpParams().set('id', id)}).pipe(
      tap(tasks => this.store.dispatch(new RemoveTask(id)))
    )
  }

  changeStatus(id: string): Observable<any>{
    return this.http.patch<any>(this.URl, {id: id}).pipe(
      tap(() => this.store.dispatch(new CompletedTask(id)))
    )
  }
}
