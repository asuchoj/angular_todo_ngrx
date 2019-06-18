import { TodoState } from "../../interfaces/interface";

const start: any[] = [];

export const initialTodoState: TodoState = {
    _tasks: [...start],
    tasks: [...start],
    pages: null,
    editTask: null,
    filter: null
};

