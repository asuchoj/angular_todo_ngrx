
import { TodoActionTypes, TodoActionInterface } from './todo-list.actions';
import { initialTodoState } from './todo-list.state'
import { Task } from '../interfaces/interface';
import * as moment from 'moment';

export function todoListReducer(state = initialTodoState, action: TodoActionInterface) {
    switch (action.type) {
        case (TodoActionTypes.Add): {
            state._tasks = [...state._tasks, action.task];
            return { ...state, tasks: [...state._tasks], editTask: null }
        }
        case (TodoActionTypes.Remove): {
            state._tasks.splice(state._tasks.findIndex(i => i.id === action.taskId), 1);
            state.tasks = [...state._tasks];
            return {...state}
        }
        case (TodoActionTypes.Edit): {
            if (state.editTask) {
                alert("Заверши редактирование");

                return state
            } else {
                state._tasks.splice(state._tasks.findIndex(i => i.id === action.body.id), 1);
                state.tasks = [...state._tasks];
                return { ...state, editTask: action.body }
            }
        }
        case (TodoActionTypes.Completed): {
            let task = state._tasks.find(i => i.id === action.taskId);
            task.isComplete = !task.isComplete;
            state.tasks = [...state._tasks];

            return {...state}
        }
        case TodoActionTypes.FilterCompleted: {
            let completedTasks: Task[] = state._tasks.filter(item => item.isComplete)
            return {...state, tasks: completedTasks}
        }
        case TodoActionTypes.FilterUncompleted: {
            let completedTasks: Task[] = state._tasks.filter(item => !item.isComplete)
            return {...state, tasks: completedTasks}
        }
        case TodoActionTypes.FilterOverdue: {
            const dateNow = moment(new Date).format('YYYY-MM-DD');
            let completedTasks: Task[] = state._tasks.filter(item => item.date < dateNow);
            return {...state, tasks: completedTasks}
        }
        case TodoActionTypes.FilterUpcoming: {
            const dateNow = moment(new Date).format('YYYY-MM-DD');
            let completedTasks: Task[] = state._tasks.filter(item => item.date >= dateNow);
            return {...state, tasks: completedTasks}
        }
        case TodoActionTypes.ShowAll: {
            return {...state, tasks: [...state._tasks]}
        }
        case TodoActionTypes.GET_TASKS: {
            state.tasks = [...action.tasks];
            state._tasks = [...action.tasks];
            return state;            
        }
        default:
            return state
    }
}