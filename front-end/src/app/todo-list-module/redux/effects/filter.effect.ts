import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';

import { TodoActionTypes } from '../actions/todo.actions';
import { TodoService } from '../../services/todo.service';
import { TodoPage } from '../../interfaces/interface';
import { PaginationActionTypes } from '../actions/pagination.actions';

@Injectable()
export class FilterEffect {

    todoActionsType = TodoActionTypes;

    pagination = PaginationActionTypes;

    constructor(private actions$: Actions, private todoServise: TodoService, private store: Store<TodoPage>) { }

    @Effect() completedTasks = this.actions$.pipe(
        ofType(this.todoActionsType.FilterCompleted),
        switchMap(() => this.todoServise.filteredTasks(this.todoActionsType.FilterCompleted))
    )

    @Effect() unCompletedTasks = this.actions$.pipe(
        ofType(this.todoActionsType.FilterUncompleted),
        switchMap(() => this.todoServise.filteredTasks(this.todoActionsType.FilterUncompleted))
    )

    @Effect() overdueTasks = this.actions$.pipe(
        ofType(this.todoActionsType.FilterOverdue),
        switchMap(() => this.todoServise.filteredTasks(this.todoActionsType.FilterOverdue))
    )

    @Effect() upcomingTasks = this.actions$.pipe(
        ofType(this.todoActionsType.FilterUpcoming),
        switchMap(() => this.todoServise.filteredTasks(this.todoActionsType.FilterUpcoming))
    )

    @Effect() showAll = this.actions$.pipe(
        ofType(this.todoActionsType.ShowAll),
        switchMap(() => this.todoServise.filteredTasks())
    )
}