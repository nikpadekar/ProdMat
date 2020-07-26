import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css'],
})
export class MyAppComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    const dialogRef = this.dialog.open(CustomizeAppDialog, {
      data: { index: '5', colorValue1: '#ffffff', colorValue2: '#039be5' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'customize-app',
  templateUrl: './customize-app/customize-app.html',
  styleUrls: ['./customize-app/customize-app.css'],
})
export class CustomizeAppDialog implements OnInit {
  colorValue1 = '#ffffff';
  colorValue2 = '#039be5';
  constructor(
    public dialogRef: MatDialogRef<CustomizeAppDialog>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    console.log('init');
  }

  onClose(): void {
    this.dialogRef.close();
  }

  colorEvent(color) {
  }
  
}
