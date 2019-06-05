import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { TodoPage } from '../../interfaces/interface'
import {
  TodoActionTypes,
  ShowCompletedTasks,
  ShowUncompletedTasks,
  ShowOverdueTasks,
  ShowUpcomingTasks,
  ShowAllTasks,
  EditTask,
  AddTask
} from '../../redux/actions/todo.actions';
import { TODO_SELECT } from '../../constants/constants';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit, OnDestroy {

  editor: boolean = false;

  form: FormGroup;

  todoAction = TodoActionTypes;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private fb: FormBuilder, private store: Store<TodoPage>) {
    this.form = this.fb.group({ name: '', date: '', id: '', isComplete: false });
  }

  ngOnInit() {
    this.store.select(TODO_SELECT).pipe(
      takeUntil(this.destroy$)
    ).subscribe(item => {
      if (item.editTask) {
        this.form.patchValue(item.editTask);
        this.editor = true;
      }
    })
  }

  onSubmit(): void {
    this.editor ? this.store.dispatch(new EditTask(this.form.value)) : this.store.dispatch(new AddTask(this.form.value))
    this.editor = false;
    this.form.reset();
  }

  ngOnDestroy(){
    this.destroy$.next(true);
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
