import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { TodoListComponent } from './todo-list.component';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { HeaderAutoriseComponent } from './components/header-autorise/header-autorise.component';
import { TaskComponent } from './components/task/task.component';
import { FooterComponent } from './components/footer/footer.component';
import { ManageComponent } from './components/manage/manage.component';
import { todoListReducer } from './redux/todo-list.reducer';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ todoPage: todoListReducer }),
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
