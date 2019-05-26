import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() level: number;

  constructor(private todoServise: TodoService) { }

  ngOnInit() {
    this.todoServise.getTasks().subscribe(t => console.log(t));
  }
}
