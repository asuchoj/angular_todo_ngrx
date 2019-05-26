import { TodoService } from 'src/app/services/todo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks: any[];

  constructor(private todoService: TodoService) {
    this.todoService.getTasks().subscribe(tasks => this.tasks = tasks);
  }
}
