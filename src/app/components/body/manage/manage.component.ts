import { TodoService } from './../../../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  constructor(private todoServise: TodoService) { }

  ngOnInit() {
    this.todoServise.setTask();
  }
}
