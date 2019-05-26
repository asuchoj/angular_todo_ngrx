import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todo: any = [
    {id: 1, name: 'Задание 1', description: 'Описание задания'}
  ];


constructor() {}

  getTasks(): Observable<any[]> {
    return of(this.todo);
  }

  setTask() {
    const i: any =  {name: 'Добавление нового', description: 'Описание задания 4'};
    this.todo.push(i);
  }
}
