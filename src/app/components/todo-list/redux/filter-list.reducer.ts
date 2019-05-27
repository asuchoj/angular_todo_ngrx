import { initialTodoState } from './todo-list.state';
import { FilterItem, FilteredCompletedTasks } from './filter-list.action';
import { Task } from '../interfaces/interface';
  
export function filterTodoListReducer (state = initialTodoState, action: FilteredCompletedTasks) {
    switch (action.type) {
        case FilterItem.Completed: 
            let completedTasks: Task[] = state.tasks.filter(item => item.isComplete)

            return {
                ...state,
                filtered: completedTasks
            }

        default:
            return state
    }
}