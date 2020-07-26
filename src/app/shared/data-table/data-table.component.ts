import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  @Input() tableData;
  @Input() columnHeader
  @Input() tableActions = [];
  @Output() action = new EventEmitter();
  objectKeys = Object.keys;
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.tableData.concat(this.tableActions);
    this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource.paginator = this.paginator;
  }

  actionEvent(event, index, action, row) {
    let object = {
      event: event,
      index: index,
      action: action.name,
      row: row
    }
    this.action.emit(object)
  }
  getIcon(action) {
    return action.icon
  }
}
