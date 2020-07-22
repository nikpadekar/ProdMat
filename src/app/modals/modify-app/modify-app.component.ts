import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modify-app',
  templateUrl: './modify-app.component.html',
  styleUrls: ['./modify-app.component.css'],
})
export class ModifyAppComponent implements OnInit {
  food: string;
  constructor(
    public dialogRef: MatDialogRef<ModifyAppComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close({
      food: this.food,
    });
  }

  ngOnInit(): void {}
}
