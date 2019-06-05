import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TodoPage } from '../../interfaces/interface';
import { TodoActionTypes, EditTask, AddTask, FilteredTasks} from '../../redux/actions/todo.actions';
import { TODO_SELECT } from '../../constants/constants';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit, OnDestroy {

  editor = false;

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
    });
  }

  onSubmit(): void {
    this.editor ? this.store.dispatch(new EditTask(this.form.value)) : this.store.dispatch(new AddTask(this.form.value));
    this.editor = false;
    this.form.reset();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

  applyCompletedFilter(): void {
    this.store.dispatch(new FilteredTasks(this.todoAction.FilterCompleted));
  }

  applyOverdueFilter(): void {
    this.store.dispatch(new FilteredTasks(this.todoAction.FilterOverdue));
  }

  applyUncompletedFilter(): void {
    this.store.dispatch(new FilteredTasks(this.todoAction.FilterUncompleted));
  }

  applyUpcomingFilter(): void {
    this.store.dispatch(new FilteredTasks(this.todoAction.FilterUpcoming));
  }

  cancelFilter(): void {
    this.store.dispatch(new FilteredTasks(null));
  }
}
