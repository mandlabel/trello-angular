import { Column } from './column.modul';
export class Board {
  constructor(public name: string, public columns: Column[]) {}
}
