import { Injectable } from '@angular/core';

import { Observable, of, from } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import {Task} from '../interfaces/interface'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  id: number = 4;

  todo: Task[] = [];


constructor() {}

  /**
   * get all tasks
   * @returns Observable
   */
  getTasks(): Observable<Task[]> {
    return of(this.todo);
  }
  
  /**
   * set task
   * @param  {string} name
   * @param  {Date} date
   * @param  {boolean} isComplete
   */
  setTask(name: string, date: Date, isComplete: boolean) {
    const newTask: Task =  {name, date, isComplete, id: this.id};
    this.todo.push(newTask);
    this.id++;
  }

  editTask(id: number) {
    let taskIndex = this.todo.findIndex( item => item.id === id );
    this.todo[taskIndex].date = new Date('2019-05-28');
    this.todo[taskIndex].name = 'Отредактированно';
    this.todo[taskIndex].isComplete = false;
  }

  deleteTask(id: number){
    let taskIndex = this.todo.findIndex( item => item.id === id );
    this.todo.splice(taskIndex, 1);
  }
}
