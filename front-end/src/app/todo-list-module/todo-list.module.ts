import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TodoListComponent } from './todo-list.component';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { HeaderAutoriseComponent } from './components/header-autorise/header-autorise.component';
import { TaskComponent } from './components/task/task.component';
import { FooterComponent } from './components/footer/footer.component';
import { ManageComponent } from './components/manage/manage.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

import { todoListReducer } from './redux/tasks/todo-list.reducer';
import { TaskEffect } from './redux/effects.effects';
import { paginationReducer } from './redux/pagination/pagination.reducer';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ todoPage: todoListReducer, pagination: paginationReducer}),
    EffectsModule.forRoot([TaskEffect]),
    HttpClientModule
  ],
  exports: [
    TodoListComponent
  ],
  declarations: [
    TodoListComponent,
    HeaderAutoriseComponent,
    HeaderLogoComponent,
    TaskComponent,
    FooterComponent,
    ManageComponent,
    PaginatorComponent
  ]
})
export class TodoListModule { }
