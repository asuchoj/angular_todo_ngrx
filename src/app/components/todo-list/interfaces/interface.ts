export interface Task {
    id: number,
    name: string,
    date: Date,
    isComplete: boolean
}

export interface TodoInitialState {
    tasks: Task[],
    editTask?: Task | null
}

export interface TodoPage {
    todoPage: {
        tasks:  Task[],
        editTask?: Task
    }
}