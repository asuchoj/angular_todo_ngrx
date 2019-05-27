import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/app/components/todo-list/services/todo.service';
import { Task } from '../../interfaces/interface'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() task: Task;

  constructor(private todoServise: TodoService) { }

  ngOnInit() {
    this.todoServise.getTasks().subscribe(t => console.log(t));
  }

  editTask(){
    this.todoServise.editTask(this.task.id);
  }

  deleteTask(){
    this.todoServise.deleteTask(this.task.id);
  }
}
