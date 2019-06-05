import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { switchMap } from 'rxjs/operators';

import { TodoActionTypes, FilteredTasks } from '../actions/todo.actions';
import { TodoService } from '../../services/todo.service';
import { PaginationActionTypes } from '../actions/pagination.actions';

@Injectable()
export class FilterEffect {

    todoActionsType = TodoActionTypes;

    pagination = PaginationActionTypes;

    constructor(private actions$: Actions, private todoServise: TodoService) { }

    @Effect() FilteredTasks = this.actions$.pipe(
        ofType(this.todoActionsType.FilteredTasks),
        switchMap((data: FilteredTasks) => this.todoServise.filteredTasks(data.filterStatus))
    );
}
