import { Action } from '@ngrx/store';

export enum PaginationActionTypes {
    ChangePages = 'changePages',
    ChangeTaskCount = 'changeTaskCount',
    ResetPage = 'resetPage',
    ResetCount = 'resetCount',
}

export class ChangePages implements Action {
    readonly type = PaginationActionTypes.ChangePages;

    constructor(public page: number, public count: number) { }
}

export class ChangeTaskCount implements Action {
    readonly type = PaginationActionTypes.ChangeTaskCount;

    constructor(public page: number, public count: number) { }
}

export class ResetPage implements Action {
    readonly type = PaginationActionTypes.ResetPage;
}

export class ResetCount implements Action {
    readonly type = PaginationActionTypes.ResetCount;
}

export type PaginationActionInterface = ChangePages | ChangeTaskCount | ResetPage | ResetCount;
