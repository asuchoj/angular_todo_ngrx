import { TodoState } from "../../interfaces/interface";

let start: any[] = []

export const initialTodoState: TodoState = {
    _tasks: [...start],
    tasks: [...start],
    pages: null,
    editTask: null,
    filter: null
}

