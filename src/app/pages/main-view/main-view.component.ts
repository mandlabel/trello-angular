import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.modul';
import { Todo } from 'src/app/models/todo.modul';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent {
  board: Board = new Board('Test Board', [
    new Column('TODO', []),
    new Column('DOING', []),
    new Column('VERIFY', []),
    new Column('DONE', []),
  ]);

  newTodo: string;
  saveTodo() {
    if (this.newTodo) {
      let todo = new Todo();

      todo.name = this.newTodo;
      const searchColumn = this.board.columns.filter(
        (col) => col.name === 'TODO'
      );

      if (searchColumn[0].tasks.find((task) => task.name === this.newTodo))
        return alert('Todo already exists!');
      searchColumn[0].tasks.push(todo);

      this.newTodo = '';
    } else {
      alert('Please enter Todo!');
    }
  }

  rmTodo(todo: Todo, column: Column) {
    const searchColumn = this.board.columns.filter(
      (col) => col.name === column.name
    );
    searchColumn[0].setColumnTasks(
      searchColumn[0].tasks.filter((t) => t.name !== todo.name)
    );
  }

  drop(event: CdkDragDrop<Todo[]>) {
    console.log('Container elements: ' + event.container.data);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
