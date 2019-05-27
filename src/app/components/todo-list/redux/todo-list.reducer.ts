import { TodoInitialState } from '../interfaces/interface';
import { TodoActionTypes, AddTask, RemoveTask, EditTask, CompletedTask } from './todo-list.actions';

const initialState: TodoInitialState = {
    tasks: [
        { id: 1, name: 'Задание 1', date: new Date('2019-08-21'), isComplete: false },
        { id: 2, name: 'Задание 2', date: new Date('2019-05-01'), isComplete: false },
        { id: 3, name: 'Задание 3', date: new Date('2019-05-28'), isComplete: true }
    ]
}

export function todoListReducer(state = initialState, action: AddTask | RemoveTask | EditTask | CompletedTask) {
    switch (action.type) {
        case (TodoActionTypes.Add):
            if(action.isEditor) state.editTask = null;

            return {
                ...state,
                tasks: [...state.tasks, action.task]
            }
        case (TodoActionTypes.Remove):
            state.tasks.splice(state.tasks.findIndex(i => i.id === action.idTask), 1);
            return state
        case (TodoActionTypes.Edit): {
            let res;

            if(state.editTask) {
                console.log(1);
                alert("Заверши редактирование");
                res = state
            } else {
                state.tasks.splice(state.tasks.findIndex(i => i.id === action.body.id), 1);
                res = {...state, editTask: action.body}
            }

            return res
        }
        case (TodoActionTypes.Completed):
            let task = state.tasks.find(i => i.id === action.taskId);
            task.isComplete = !task.isComplete;
            
            return state
        default:
            return state
    }
}