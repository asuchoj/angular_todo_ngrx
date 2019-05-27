import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Task } from '../../interfaces/interface'
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  @Input() tasks: Task[];

  form: any;

  constructor(private fb: FormBuilder, private todoService: TodoService) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      date: ['']
    })
  }

  onSubmit(){
    this.todoService.setTask(this.form.value.name, this.form.value.date, false);
  }
}
