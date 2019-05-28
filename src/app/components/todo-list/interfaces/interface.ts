export interface Task {
    id: number,
    name: string,
    date: string,
    isComplete: boolean
}

export interface TodoInitialState {
    _tasks: Task[],
    tasks: Task[],
    editTask?: Task | null,
}

export interface TodoPage {
    todoPage: {
        _tasks: Task[],
        tasks: Task[],
        editTask?: Task,
    }
}
