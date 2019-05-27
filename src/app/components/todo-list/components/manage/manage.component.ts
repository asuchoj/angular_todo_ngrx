import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Task, TodoPage } from '../../interfaces/interface'
import { Store } from '@ngrx/store';
import { AddTask } from '../../redux/todo-list.actions';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  editor: boolean = false;

  form: any;

  constructor(private fb: FormBuilder, private store: Store<TodoPage>) {
    this.form = this.fb.group({name: '', date: '', id: '', isComplete: ''});
  }

  ngOnInit() {
    this.store.select('todoPage').subscribe(item => {
      if(item.editTask) {
        this.form.patchValue(item.editTask);
        this.editor = true;
      }
    })
  }

  onSubmit(){
    if(this.editor) this.store.dispatch(new AddTask(this.form.value, true))
    else this.store.dispatch(new AddTask(this.form.value));

    this.editor = false;
    this.form.reset();
  }
}
