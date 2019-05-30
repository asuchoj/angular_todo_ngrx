import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { TodoPage } from '../../interfaces/interface'
import { Store } from '@ngrx/store';
import {
  AddTask,
  TodoActionTypes,
  ShowCompletedTasks,
  ShowUncompletedTasks,
  ShowOverdueTasks,
  ShowUpcomingTasks,
  ShowAllTasks
} from '../../redux/todo-list.actions';
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

  constructor(
    private fb: FormBuilder,
    private store: Store<TodoPage>,
    private todoService: TodoService
  ) {
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

  showAllTasks(action: string): void {
    switch (action) {
      case this.todoAction.FilterCompleted:
        return this.store.dispatch(new ShowCompletedTasks);
      case this.todoAction.FilterOverdue:
        return this.store.dispatch(new ShowOverdueTasks);
      case this.todoAction.FilterUncompleted:
        return this.store.dispatch(new ShowUncompletedTasks);
      case this.todoAction.FilterUpcoming:
        return this.store.dispatch(new ShowUpcomingTasks);
      default:
        return this.store.dispatch(new ShowAllTasks);
    }
  }
}
