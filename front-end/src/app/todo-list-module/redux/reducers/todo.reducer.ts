import { TodoActionTypes, TodoActionInterface } from '../actions/todo.actions';
import { initialTodoState } from '../states/todo.state'

export function todoReducer(state = initialTodoState, action: TodoActionInterface) {
    switch (action.type) {
        case (TodoActionTypes.BeginEdit): {
            if (state.editTask) {
                alert("Заверши редактирование");

                return state
            } else {
                state._tasks.splice(state._tasks.findIndex(i => i.id === action.body.id), 1);
                return { ...state, editTask: action.body, tasks: [...state._tasks]}
            }
        }
        case (TodoActionTypes.Edit): {
            return { ...state, editTask: null}
        }
        case (TodoActionTypes.FilterCompleted): {
            return {...state, filter: action.type}
        }
        case (TodoActionTypes.FilterUncompleted): {
            return {...state, filter: action.type}
        }
        case (TodoActionTypes.FilterOverdue): {
            return {...state, filter: action.type}
        }
        case (TodoActionTypes.FilterUpcoming): {
            return {...state, filter: action.type}
        }
        case (TodoActionTypes.ShowAll): {
            return {...state, filter: null}
        }
        case TodoActionTypes.GET_TASKS: {
            return {...state, tasks: [...action.tasks], _tasks: [...action.tasks], pages: action.pages};            
        }
        default:
            return state
    }
}
