import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css'],
})
export class TemplatesComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    const dialogRef = this.dialog.open(CustomizeTemplateDialog, {
      data: { index: '5', name: '', animal: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'customize-template',
  templateUrl: './customize-template/customize-template.html',
  styleUrls: ['./customize-template/customize-template.css'],
})
export class CustomizeTemplateDialog implements OnInit {
  colorValue1 = '';
  colorValue2 = '';
  constructor(
    public dialogRef: MatDialogRef<CustomizeTemplateDialog>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    console.log('init');
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
