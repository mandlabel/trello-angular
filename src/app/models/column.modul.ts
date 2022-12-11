import { Todo } from "./todo.modul";

export class Column {
    constructor(public name: string, public tasks: Todo[]) {}
}