import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
 
import { TodoListComponent } from './todo-list.component';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { HeaderAutoriseComponent } from './components/header-autorise/header-autorise.component';
import { CourseComponent } from './components/course/course.component';
import { FooterComponent } from './components/footer/footer.component';
import { ManageComponent } from './components/manage/manage.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule
  ],
  exports: [
    TodoListComponent,
    HeaderAutoriseComponent,
    HeaderLogoComponent,
    CourseComponent,
    FooterComponent,
    ManageComponent
  ],
  declarations: [
    TodoListComponent,
    HeaderAutoriseComponent,
    HeaderLogoComponent,
    CourseComponent,
    FooterComponent,
    ManageComponent
  ]
})
export class TodoListModule {}
