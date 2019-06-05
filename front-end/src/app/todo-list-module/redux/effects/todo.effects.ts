import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { switchMap } from 'rxjs/operators';

import { TodoService } from '../../services/todo.service';
import { PaginationActionTypes, ChangePages } from '../actions/pagination.actions';
import { TodoActionTypes, EditTask, AddTask } from '../actions/todo.actions';

@Injectable()
export class TaskEffect {

    todoActionsType = TodoActionTypes;

    pagination = PaginationActionTypes;

    constructor(private actions$: Actions, private todoService: TodoService) { }

    @Effect() add$ = this.actions$.pipe(
        ofType(this.todoActionsType.Add),
        switchMap((task: AddTask) => this.todoService.addTask(task.task)),
        switchMap(() => this.todoService.reLoadTasks())
    );

    @Effect() edit$ = this.actions$.pipe(
        ofType(this.todoActionsType.Edit),
        switchMap((data: EditTask) => this.todoService.editTask(data.body)),
        switchMap(() => this.todoService.reLoadTasks())
    );

    @Effect() complete$ = this.actions$.pipe(
        ofType(this.todoActionsType.Completed),
        switchMap((data: { taskId: string }) => this.todoService.changeStatus(data.taskId)),
        switchMap(() => this.todoService.reLoadTasks())
    );

    @Effect() delete$ = this.actions$.pipe(
        ofType(this.todoActionsType.Remove),
        switchMap((data: { taskId: string }) => this.todoService.deleteTask(data.taskId)),
        switchMap(() => this.todoService.reLoadTasks())
    );

    @Effect() changePage$ = this.actions$.pipe(
        ofType(this.pagination.ChangePages),
        switchMap((data: ChangePages) => this.todoService.reLoadTasks(data.page, data.count))
    );
}
