import { Action } from '@ngrx/store';

export enum PaginationActionTypes {
    ChangePages = 'chengePages',
    ChengeTaskCount = 'chengeTaskCount',
    ResetPage = 'resetPage',
    ResetCount = 'resetCount',
}

export class ChangePages implements Action {
    readonly type = PaginationActionTypes.ChangePages;

    constructor(public page: number, public count: number){}
}

export class ChengeTaskCount implements Action {
    readonly type = PaginationActionTypes.ChengeTaskCount;

    constructor(public page: number, public count: number){}
}

export class ResetPage implements Action {
    readonly type = PaginationActionTypes.ResetPage;
}

export class ResetCount implements Action {
    readonly type = PaginationActionTypes.ResetCount;
}

export type PaginationActionInterface = ChangePages | ChengeTaskCount | ResetPage | ResetCount;