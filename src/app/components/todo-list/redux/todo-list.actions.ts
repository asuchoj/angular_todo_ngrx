import { Action } from '@ngrx/store';
import { Task } from '../interfaces/interface'

export enum TodoActionTypes {
    Add = 'add',
    Remove = 'remove',
    Edit = 'edit',
    Completed = 'completed'
}

export class AddTask implements Action {
    readonly type = TodoActionTypes.Add;

    constructor(public task: Task, public isEditor?: boolean) { }
}

export class RemoveTask implements Action {
    readonly type = TodoActionTypes.Remove;

    constructor(public idTask: number) { }
}

export class EditTask implements Action {
    readonly type = TodoActionTypes.Edit;

    constructor(public body: Task) { }
}

export class CompletedTask implements Action {
    readonly type = TodoActionTypes.Completed;

    constructor(public taskId: number) { }
}