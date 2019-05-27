
import { TodoActionTypes, AddTask, RemoveTask, EditTask, CompletedTask } from './todo-list.actions';
import { initialTodoState } from './todo-list.state'

export function todoListReducer(state = initialTodoState, action: AddTask | RemoveTask | EditTask | CompletedTask) {
    switch (action.type) {
        case (TodoActionTypes.Add):
            return {...state, tasks: [...state.tasks, action.task], editTask: null}
            
        case (TodoActionTypes.Remove):
            state.tasks.splice(state.tasks.findIndex(i => i.id === action.idTask), 1);
            
            return state

        case (TodoActionTypes.Edit): {
            if(state.editTask) {
                alert("Заверши редактирование");

                return state
            } else {
                state.tasks.splice(state.tasks.findIndex(i => i.id === action.body.id), 1);

                return {...state, editTask: action.body}
            }
        }
        case (TodoActionTypes.Completed):
            let task = state.tasks.find(i => i.id === action.taskId);
            task.isComplete = !task.isComplete;

            return state

        default:
            return state
    }
}