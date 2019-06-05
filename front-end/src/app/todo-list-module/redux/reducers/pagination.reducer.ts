import { PaginationActionInterface, PaginationActionTypes } from '../actions/pagination.actions';
import { paginationState } from '../states/pagination.state';

export function paginationReducer(state = paginationState, action: PaginationActionInterface) {
    switch (action.type) {
        case (PaginationActionTypes.ChangePages): {
            return {page: action.page, count: action.count}
        }
        case (PaginationActionTypes.ChengeTaskCount): {
            return {page: action.page, count: action.count}
        }
        case (PaginationActionTypes.ResetPage): {
            return {...state, page: 1}
        }
        case (PaginationActionTypes.ResetCount): {
            return {...state, count: 5}
        }
        default:
            return state
    }
}
