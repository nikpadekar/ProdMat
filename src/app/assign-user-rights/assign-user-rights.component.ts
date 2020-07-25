import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-assign-user-rights',
  templateUrl: './assign-user-rights.component.html',
  styleUrls: ['./assign-user-rights.component.css'],
})
export class AssignUserRightsComponent implements OnInit {
  appName = '1';
  appCategory = '1';
  constructor() {}

  userSelect = new FormControl();

  usersList: string[] = [
    'Darrell Goodwin',
    'Terrance Peters',
    'Beatrice Burton',
    'Derek Dunn',
  ];
  categorySelect = new FormControl();
  categoryList: string[] = ['Games', 'Utility', 'Shopping', 'News'];
  ngOnInit(): void {}
}
