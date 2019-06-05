export interface Task {
    id?: string,
    name: string,
    date: string,
    isComplete: boolean
}

export interface TodoState {
    _tasks: Task[],
    tasks: Task[],
    pages: number,
    editTask?: Task | null,
    filter: string | null
}

export interface PaginationState {
    page: number,
    count: number
}

export interface TodoPage {
    todo: TodoState,
    pagination: PaginationState
}
