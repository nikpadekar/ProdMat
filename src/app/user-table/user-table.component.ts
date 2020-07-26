import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableComponent } from '../shared/data-table/data-table.component';

export interface userTableData {
  appName: string;
  users: string;
  userRole: string;
  tableActions : Array<object>;
}

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  checkHeader(data) {
    if (data == 'studentID') {
      console.log('stud');
      return 'Student ID';
    } else {
      console.log('false');
      return 'INVALID DATA';
    }
  }

  columnHeader = {
    appName: 'App',
    users: 'Users',
    userRole: 'Role',
    action: 'Actions',
  };

  tableActions = [
    { name : "EDIT", icon : "" },
    { name : "EDIT", icon : "" },
    { name : "EDIT", icon : "" }
  ];

  tableData: userTableData[] = [
    {
      appName: 'App 1',
      users: 'Darrell Goodwin, Terrance Peters, Beatrice Burton, DerekDunn',
      userRole: 'Admin, Publisher, Creator',
      tableActions : this.tableActions
    },
    {
      appName: 'App 2',
      users: 'Darrell Goodwin, Terrance Peters, Beatrice Burton, DerekDunn',
      userRole: 'Admin, Publisher, Creator',
      tableActions : this.tableActions
    },
    {
      appName: 'App 3',
      users: 'Darrell Goodwin, Terrance Peters, Beatrice Burton, DerekDunn',
      userRole: 'Admin, Publisher, Creator',
      tableActions : this.tableActions
    },
    {
      appName: 'App 4',
      users: 'Darrell Goodwin, Terrance Peters, Beatrice Burton, DerekDunn',
      userRole: 'Admin, Publisher, Creator',
      tableActions : this.tableActions
    },
    {
      appName: 'App 5',
      users: 'Darrell Goodwin, Terrance Peters, Beatrice Burton, DerekDunn',
      userRole: 'Admin, Publisher, Creator',
      tableActions : this.tableActions
    },
    {
      appName: 'App 6',
      users: 'Darrell Goodwin, Terrance Peters, Beatrice Burton, DerekDunn',
      userRole: 'Admin, Publisher, Creator',
      tableActions : this.tableActions
    },
    {
      appName: 'App 7',
      users: 'Darrell Goodwin, Terrance Peters, Beatrice Burton, DerekDunn',
      userRole: 'Admin, Publisher, Creator',
      tableActions : this.tableActions
    },
    {
      appName: 'App 8',
      users: 'Darrell Goodwin, Terrance Peters, Beatrice Burton, DerekDunn',
      userRole: 'Admin, Publisher, Creator',
      tableActions : this.tableActions
    },
    {
      appName: 'App 9',
      users: 'Darrell Goodwin, Terrance Peters, Beatrice Burton, DerekDunn',
      userRole: 'Admin, Publisher, Creator',
      tableActions : this.tableActions
    },
    {
      appName: 'App 10',
      users: 'Darrell Goodwin, Terrance Peters, Beatrice Burton, DerekDunn',
      userRole: 'Admin, Publisher, Creator',
      tableActions : this.tableActions
    },
  ];
}
