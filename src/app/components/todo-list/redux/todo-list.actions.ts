import { Action } from '@ngrx/store';
import { Task } from '../interfaces/interface'

export enum TodoActionTypes {
    Add = 'add',
    Remove = 'remove',
    Edit = 'edit',
    Completed = 'completed',
    FilterCompleted = 'filterCompleted',
    FilterUncompleted = 'filterUncompleted',
    FilterOverdue = 'filterOverdue',
    FilterUpcoming = 'filterUpcoming',
    ShowAll = 'showall'
}

export class AddTask implements Action {
    readonly type = TodoActionTypes.Add;

    constructor(public task: Task, public isEditor?: boolean) { }
}

export class RemoveTask implements Action {
    readonly type = TodoActionTypes.Remove;

    constructor(public taskId: number) { }
}

export class EditTask implements Action {
    readonly type = TodoActionTypes.Edit;

    constructor(public body: Task) { }
}

export class CompletedTask implements Action {
    readonly type = TodoActionTypes.Completed;

    constructor(public taskId: number) { }
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

export type TodoActionInterface = AddTask | RemoveTask | EditTask | CompletedTask | ShowCompletedTasks | ShowUncompletedTasks | ShowOverdueTasks | ShowUpcomingTasks | ShowAllTasks;