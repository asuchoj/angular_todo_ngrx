import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {TodoListComponent} from './todo-list.component';
import {HeaderLogoComponent} from './components/header-logo/header-logo.component';
import {HeaderAutoriseComponent} from './components/header-autorise/header-autorise.component';
import {TaskComponent} from './components/task/task.component';
import {FooterComponent} from './components/footer/footer.component';
import {ManageComponent} from './components/manage/manage.component';
import {PaginatorComponent} from './components/paginator/paginator.component';

import {todoReducer} from './redux/reducers/todo.reducer';
import {paginationReducer} from './redux/reducers/pagination.reducer';
import {TaskEffect as TodoEffect} from './redux/effects/todo.effects';
import {FilterEffect} from './redux/effects/filter.effect';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forRoot({todo: todoReducer, pagination: paginationReducer}),
    EffectsModule.forRoot([TodoEffect, FilterEffect]),
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
export class TodoListModule {
}
