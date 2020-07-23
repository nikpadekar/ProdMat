import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { ModifyAppComponent } from '../modals/modify-app/modify-app.component';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css'],
})
export class MyAppComponent implements OnInit {
  // title = 'angular-material-modals';

  // city: string;
  // name: string;
  // food_from_modal: string;
  constructor(public dialog: MatDialog) {}
  
  ngOnInit() {}
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(ModifyAppComponent, {
  //     width: '80vw',
  //     data: { name: this.name, animal: this.city },
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.city = result;
  //     this.food_from_modal = result.food;
  //   });
  // }

  openDialog() {
    const dialogRef = this.dialog.open(CustomizeAppDialog , {data: {index: '5', name: "", animal: ""}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'customize-app',
  templateUrl: './customize-app/customize-app.html',
  styleUrls: ['./customize-app/customize-app.css']
})
export class CustomizeAppDialog implements OnInit {
  colorValue1 = '#ffffff'
  colorValue2 = '#FF0000'
  constructor(
    public dialogRef: MatDialogRef<CustomizeAppDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
    console.log("init")
  }

  onClose(): void {
    this.dialogRef.close();
  }
}