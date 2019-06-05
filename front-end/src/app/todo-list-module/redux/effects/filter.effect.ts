import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';

import { TodoActionTypes, FilteredTasks } from '../actions/todo.actions';
import { TodoService } from '../../services/todo.service';
import { TodoPage } from '../../interfaces/interface';
import { PaginationActionTypes } from '../actions/pagination.actions';

@Injectable()
export class FilterEffect {

    todoActionsType = TodoActionTypes;

    pagination = PaginationActionTypes;

    constructor(private actions$: Actions, private todoServise: TodoService, private store: Store<TodoPage>) { }

    @Effect() FilteredTasks = this.actions$.pipe(
        ofType(this.todoActionsType.FilteredTasks),
        switchMap((data: FilteredTasks) => this.todoServise.filteredTasks(data.filterStatus))
    )
}