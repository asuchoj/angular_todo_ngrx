export interface Task {
    id?: string,
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
        pages: number
    }
}

export interface paginationTasks{
    pages: number,
    tasks: Task[]
}
