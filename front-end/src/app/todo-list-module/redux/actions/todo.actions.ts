import { Action } from '@ngrx/store';
import { Task } from '../../interfaces/interface';

export enum TodoActionTypes {
    Add = 'add',
    Remove = 'remove',
    BeginEdit = 'beginEdit',
    Edit = 'edit',
    Completed = 'completed',
    FilterCompleted = 'filterCompleted',
    FilterUncompleted = 'filterUncompleted',
    FilterOverdue = 'filterOverdue',
    FilterUpcoming = 'filterUpcoming',
    ShowAll = 'showAll',
    GET_TASKS = 'GET_TASKS',
    FilteredTasks = 'Filtered'
}

export class AddTask implements Action {
    readonly type = TodoActionTypes.Add;

    constructor(public task: Task, public isEditor?: boolean) { }
}

export class RemoveTask implements Action {
    readonly type = TodoActionTypes.Remove;

    constructor(public taskId: string) { }
}

export class EditTask implements Action {
    readonly type = TodoActionTypes.Edit;

    constructor(public body: Task) { }
}

export class BeginEditTask implements Action {
    readonly type = TodoActionTypes.BeginEdit;

    constructor(public body: Task) { }
}

export class CompletedTask implements Action {
    readonly type = TodoActionTypes.Completed;

    constructor(public taskId: string) { }
}

export class ShowCompletedTasks implements Action {
    readonly type = TodoActionTypes.FilterCompleted;
}

export class ShowUncompletedTasks implements Action {
    readonly type = TodoActionTypes.FilterUncompleted;
}

export class ShowOverdueTasks implements Action {
    readonly type = TodoActionTypes.FilterOverdue;
}

export class ShowUpcomingTasks implements Action {
    readonly type = TodoActionTypes.FilterUpcoming;
}

export class ShowAllTasks implements Action {
    readonly type = TodoActionTypes.ShowAll;
}

export class FilteredTasks implements Action {
    readonly type = TodoActionTypes.FilteredTasks;

    constructor(public filterStatus: string) { }
}

export class GetTasks implements Action {
    readonly type = TodoActionTypes.GET_TASKS;

    constructor(public tasks: Task[], public pages: number) { }
}

export type TodoActionInterface = AddTask |
    RemoveTask |
    EditTask |
    BeginEditTask |
    CompletedTask |
    ShowCompletedTasks |
    ShowUncompletedTasks |
    ShowOverdueTasks |
    ShowUpcomingTasks |
    ShowAllTasks |
    FilteredTasks |
    GetTasks;
