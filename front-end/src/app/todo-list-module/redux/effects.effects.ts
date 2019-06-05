import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { switchMap, mergeMap, tap, map } from 'rxjs/operators';

import { TodoActionTypes, GetTasks } from './tasks/todo-list.actions';
import { TodoService } from '../services/todo.service';
import { paginationTasks, TodoPage } from '../interfaces/interface';
import { PaginationActionTypes, ChangePages } from './pagination/pagination.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable()
export class TaskEffect {

    todoActionsType = TodoActionTypes;

    pagination = PaginationActionTypes;

    constructor(private actions$: Actions, private todoServise: TodoService, private store: Store<TodoPage>) { }

    @Effect() loadTask = this.actions$.pipe(
        ofType(this.todoActionsType.Add),
        switchMap(() => this.reLoadTasks())
    )

    @Effect() completedTasks = this.actions$.pipe(
        ofType(this.todoActionsType.FilterCompleted),
        switchMap(() => this.filteredTasks(1, 5, this.todoActionsType.FilterCompleted))
    )

    @Effect() unCompletedTasks = this.actions$.pipe(
        ofType(this.todoActionsType.FilterUncompleted),
        switchMap(() => this.filteredTasks(1, 5, this.todoActionsType.FilterUncompleted))
    )

    @Effect() overdueTasks = this.actions$.pipe(
        ofType(this.todoActionsType.FilterOverdue),
        switchMap(() => this.filteredTasks(1, 5, this.todoActionsType.FilterOverdue))
    )

    @Effect() upcomingTasks = this.actions$.pipe(
        ofType(this.todoActionsType.FilterUpcoming),
        switchMap(() => this.filteredTasks(1, 5, this.todoActionsType.FilterUpcoming))
    )

    @Effect() showAll = this.actions$.pipe(
        ofType(this.todoActionsType.ShowAll),
        switchMap(() => this.filteredTasks())
    )

    @Effect({dispatch: false}) chengePage = this.actions$.pipe(
        ofType(this.pagination.ChangePages),
        switchMap((data: ChangePages) => this.reLoadTasks(data.page, data.count, data.type))
    )

    reLoadTasks(page?: number, count?: number, filter?: string): Observable<any> {
        return this.todoServise.reFetchTasks(page, count, filter).pipe(
            mergeMap((paginationTasks: paginationTasks) => {
                this.store.dispatch(new GetTasks(paginationTasks.tasks, paginationTasks.pages));
                return [
                    {
                        type: this.todoActionsType.GET_TASKS,
                        tasks: paginationTasks.tasks,
                        pages: paginationTasks.pages
                    }
                ]
            })
        )
    }

    filteredTasks(page?: number, count?: number, filter?: string): Observable<any> {
        return this.todoServise.reFetchTasks(page, count, filter).pipe(
            mergeMap((paginationTasks: paginationTasks) => {
                return [
                    {type: this.pagination.ResetPage},
                    {
                        type: this.todoActionsType.GET_TASKS,
                        tasks: paginationTasks.tasks,
                        pages: paginationTasks.pages
                    }
                ]
            })
        )
    }
}