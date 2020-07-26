import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  @Input() tableData;
  @Input() columnHeader;
  objectKeys = Object.keys;
  dataSource;
  tableActions = [
    { name : "EDIT", icon : "" },
    { name : "EDIT", icon : "" },
    { name : "EDIT", icon : "" }
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    console.log(this.tableData);
    this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource.paginator = this.paginator;
  }

}
