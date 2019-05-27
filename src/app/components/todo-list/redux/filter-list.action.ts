import { Action } from '@ngrx/store';

export enum FilterItem {
    Completed = 'completed',
    Uncompleted = 'uncompleted',
    Overdue = 'overdue',
    Upcoming = 'upcoming'
}

export class FilteredCompletedTasks implements Action {
    readonly type: FilterItem.Completed;
}