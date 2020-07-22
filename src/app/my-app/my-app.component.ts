import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModifyAppComponent } from '../modals/modify-app/modify-app.component';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css'],
})
export class MyAppComponent implements OnInit {
  title = 'angular-material-modals';

  city: string;
  name: string;
  food_from_modal: string;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModifyAppComponent, {
      width: '80vw',
      data: { name: this.name, animal: this.city },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.city = result;
      this.food_from_modal = result.food;
    });
  }

  ngOnInit() {}
}
