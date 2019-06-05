import { TodoActionTypes, TodoActionInterface } from './todo-list.actions';
import { initialTodoState } from './todo-list.state'
import { formatDate } from '../../utility/utility';

export function todoListReducer(state = initialTodoState, action: TodoActionInterface) {
    switch (action.type) {
        case (TodoActionTypes.Add): {
            state._tasks = [...state._tasks, action.task];
            return { ...state, tasks: [...state._tasks], editTask: null }
        }
        case (TodoActionTypes.Remove): {
            state._tasks.splice(state._tasks.findIndex(i => i.id === action.taskId), 1);
            return {...state, tasks: [...state._tasks]}
        }
        case (TodoActionTypes.Edit): {
            if (state.editTask) {
                alert("Заверши редактирование");

                return state
            } else {
                state._tasks.splice(state._tasks.findIndex(i => i.id === action.body.id), 1);
                return { ...state, editTask: action.body, tasks: [...state._tasks]}
            }
        }
        case (TodoActionTypes.Completed): {
            const task = state._tasks.find(i => i.id === action.taskId);
            console.log(task);
            task.isComplete = !task.isComplete;

            return {...state, tasks: [...state._tasks]}
        }

        case TodoActionTypes.GET_TASKS: {
            return {...state, tasks: [...action.tasks], _tasks: [...action.tasks], pages: action.pages};            
        }
        default:
            return state
    }
}
