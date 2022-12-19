import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  name: string;
  new_todo_value: string;
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'modify-dialog.component.html',
})
export class ModifyDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ModifyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
