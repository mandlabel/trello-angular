import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.modul';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {


  board: Board = new Board('Test Board', [
    new Column('TODO', [
      'Test item 1',
      'Test item 2'
    ]),
    new Column('DOING', [
      'Test item 3',
      'Test item 4'
    ]),
    new Column('VERIFY', [
      'Test item 5',
      'Test item 6'
    ]),
    new Column('DONE', [
      'Test item 7',
      'Test item 8'
    ]),
  ]);

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
