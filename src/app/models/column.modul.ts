import { Todo } from './todo.modul'

export class Column {
    constructor(public name: string, public tasks: Todo[]) {}

    getColumnTasks() {
        return this.tasks
    }

    setColumnTasks(columnTasks: Todo[]) {
        this.tasks = columnTasks
    }
}
