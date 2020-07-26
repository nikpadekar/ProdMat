import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface userTableData {
  dateTime: string;
  title: string;
  status: string;
}

@Component({
  selector: 'app-publish-story',
  templateUrl: './publish-story.component.html',
  styleUrls: ['./publish-story.component.css'],
})
export class PublishStoryComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  appSelect = new FormControl();
  appList: string[] = ['App1', 'App2'];

  columnHeader = {
    dateTime: 'Date Time',
    title: 'Title',
    status: 'Status',
    action: 'Actions',
  };

  tableActions = [
    { name: 'EDIT', icon: 'create' },
    { name: 'DELETE', icon: 'delete' },
    { name: 'CHECKED', icon: 'done_all' },
  ];

  tableData: userTableData[] = [
    {
      dateTime: '24 April 2020 4:26 pm',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      status: 'Approve',
    },
    {
      dateTime: '24 April 2020 4:26 pm',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      status: 'Approve',
    },
    {
      dateTime: '24 April 2020 4:26 pm',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      status: 'Reject',
    },
    {
      dateTime: '24 April 2020 4:26 pm',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      status: 'Pending',
    },
    {
      dateTime: '24 April 2020 4:26 pm',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      status: 'Approve',
    },
    {
      dateTime: '24 April 2020 4:26 pm',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      status: 'Pending',
    },
    {
      dateTime: '24 April 2020 4:26 pm',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      status: 'Reject',
    },
    {
      dateTime: '24 April 2020 4:26 pm',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      status: 'Approve',
    },
    {
      dateTime: '24 April 2020 4:26 pm',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      status: 'Approve',
    },
    {
      dateTime: '24 April 2020 4:26 pm',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      status: 'Approve',
    },
  ];

  actionFunction(actionEvent) {
    console.log(actionEvent.event);
    console.log(actionEvent.index);
    console.log(actionEvent.action);
    console.log(actionEvent.row);
  }
}
