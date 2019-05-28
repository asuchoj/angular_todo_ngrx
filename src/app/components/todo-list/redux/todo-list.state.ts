import { TodoInitialState } from "../interfaces/interface";

export const initialTodoState: TodoInitialState = {
    _tasks: [
        { id: 1, name: 'Задание 1', date: '2019-08-21', isComplete: false },
        { id: 2, name: 'Задание 2', date: '2019-05-01', isComplete: false },
        { id: 3, name: 'Задание 3', date: '2019-05-28', isComplete: true }
    ],
    tasks: [
        { id: 1, name: 'Задание 1', date: '2019-08-21', isComplete: false },
        { id: 2, name: 'Задание 2', date: '2019-05-01', isComplete: false },
        { id: 3, name: 'Задание 3', date: '2019-05-28', isComplete: true }
    ]
}