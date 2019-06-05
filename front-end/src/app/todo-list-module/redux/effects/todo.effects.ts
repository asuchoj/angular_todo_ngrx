import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { switchMap } from 'rxjs/operators';

import { TodoService } from '../../services/todo.service';
import { TodoPage } from '../../interfaces/interface';
import { PaginationActionTypes, ChangePages } from '../actions/pagination.actions';
import { TodoActionTypes, EditTask, AddTask } from '../actions/todo.actions';

@Injectable()
export class TaskEffect {

    todoActionsType = TodoActionTypes;

    pagination = PaginationActionTypes;

    constructor(private actions$: Actions, private todoServise: TodoService, private store: Store<TodoPage>) { }

    @Effect() add$ = this.actions$.pipe(
        ofType(this.todoActionsType.Add),
        switchMap((task: AddTask) => this.todoServise.addTask(task.task)),
        switchMap(() => this.todoServise.reLoadTasks())
    )

    @Effect() edit$ = this.actions$.pipe(
        ofType(this.todoActionsType.Edit),
        switchMap((data: EditTask) => this.todoServise.editTask(data.body)),
        switchMap(() => this.todoServise.reLoadTasks())
    )

    @Effect() complete$ = this.actions$.pipe(
        ofType(this.todoActionsType.Completed),
        switchMap((data: { taskId: string }) => this.todoServise.changeStatus(data.taskId)),
        switchMap(() => this.todoServise.reLoadTasks())
    )

    @Effect() delete$ = this.actions$.pipe(
        ofType(this.todoActionsType.Remove),
        switchMap((data: { taskId: string }) => this.todoServise.deleteTask(data.taskId)),
        switchMap(() => this.todoServise.reLoadTasks())
    )

    @Effect() chengePage$ = this.actions$.pipe(
        ofType(this.pagination.ChangePages),
        switchMap((data: ChangePages) => this.todoServise.reLoadTasks(data.page, data.count))
    )
}