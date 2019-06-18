import * as component from './components';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TodoListComponent } from './todo-list.component';

import { todoReducer } from './redux/reducers/todo.reducer';
import { paginationReducer } from './redux/reducers/pagination.reducer';
import { TaskEffect as TodoEffect } from './redux/effects/todo.effects';
import { FilterEffect } from './redux/effects/filter.effect';

function toArrayC(obj){
  return Object.keys(obj).map(k => obj[k]);
}

const declarations = [...toArrayC(component)];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ todo: todoReducer, pagination: paginationReducer }),
    EffectsModule.forRoot([TodoEffect, FilterEffect])
  ],
  exports: [TodoListComponent],
  declarations: [TodoListComponent, ...declarations]
})
export class TodoListModule { }
