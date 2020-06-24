import { Component, OnInit, ViewChild } from '@angular/core';
//Filter
import {MatTableDataSource} from '@angular/material/table';


import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { PageService } from '../shared/page.service';
import { Page } from '../shared/page.model';


@Component({
  selector: 'app-shoesdesk',
  templateUrl: './shoesdesk.component.html',
  styleUrls: ['./shoesdesk.component.scss']
})
export class ShoesdeskComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'size', 'price'];
  dataSource = new MatTableDataSource();
  list: Page[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private authSvc: PageService) { }

  ngOnInit(): void {
    this.authSvc.getItems().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() as Page
        }
      })
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
