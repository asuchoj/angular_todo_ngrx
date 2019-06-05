import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { TodoPage } from '../../interfaces/interface'
import { Store } from '@ngrx/store';
import {
  TodoActionTypes,
  ShowCompletedTasks,
  ShowUncompletedTasks,
  ShowOverdueTasks,
  ShowUpcomingTasks,
  ShowAllTasks
} from '../../redux/tasks/todo-list.actions';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  editor: boolean = false;

  form: FormGroup;

  todoAction = TodoActionTypes;

  constructor(private fb: FormBuilder, private store: Store<TodoPage>, private todoService: TodoService) {
    this.form = this.fb.group({ name: '', date: '', id: '', isComplete: false });
  }

  ngOnInit() {
    this.store.select('todoPage').subscribe(item => {
      if (item.editTask) {
        this.form.patchValue(item.editTask);
        this.editor = true;
      }
    })
  }

  onSubmit(): void {
    this.editor ? this.todoService.editTask(this.form.value).subscribe() : this.todoService.addTask(this.form.value).subscribe();  
    this.editor = false;
    this.form.reset();
  }
  
  applyCompletedFilter(): void {
    this.store.dispatch(new ShowCompletedTasks);
  }

  applyOverdueFilter(): void {
    this.store.dispatch(new ShowOverdueTasks);
  }

  applyUncompletedFilter(): void {
    this.store.dispatch(new ShowUncompletedTasks);
  }

  applyUpcomingFilter(): void {
    this.store.dispatch(new ShowUpcomingTasks);
  }

  canceleFilter(): void {
    this.store.dispatch(new ShowAllTasks);
  }
}
