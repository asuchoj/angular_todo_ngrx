import { Component } from '@angular/core';
import { TodoService } from './services/todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent{
  tasks: any[];

  constructor(private todoService: TodoService) {
    this.todoService.getTasks().subscribe(tasks => this.tasks = tasks);
  }
}
