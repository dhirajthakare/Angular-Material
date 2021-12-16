import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


import { filter } from 'rxjs';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit  {

  constructor( private http:HttpClient , private _liveAnnouncer: LiveAnnouncer) { }
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  Paginator!: MatPaginator;

  displayedColumns: string[] = ['_id', 'name', 'email', 'gender'];
  dataSource:any;
  // dataSource :any = [
  //   {_id:'32432423ds',name:'mdhiru',email:'dhirah@jdhkj.com',gender:'male'},
  //   {_id:'324324asas23ds',name:'adhwiru',email:'dhirasah@jdhkj.com',gender:'male'},
  //   {_id:'32432423ds',name:'dhiASru',email:'dhisarah@jdhkj.com',gender:'male'}
  // ];
  // dataSource1 = new MatTableDataSource(this.dataSource);

  ngOnInit(): void {
    this.http.get('http://localhost:2000/alluser').subscribe(res=>{
      console.log(res);
      this.dataSource = res;
      this.dataSource = new MatTableDataSource(this.dataSource);

      console.log(this.dataSource);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.Paginator;



    })
  }

  

  applyFilter(FilterValue:any){
    console.log(FilterValue.value);
    var FilterValue = FilterValue.value;
    this.dataSource.filter = FilterValue;
    // this.dataSource.filter = FilterValue.trim().toLowerCase();

  }
   /** Announce the change in sort state for assistive technology. */
  //  announceSortChange(sortState: Sort) {
  //   // This example uses English messages. If your application supports
  //   // multiple language, you would internationalize these strings.
  //   // Furthermore, you can customize the message to add additional
  //   // details about the values being sorted.
  //   if (sortState.direction) {
  //     this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  //   } else {
  //     this._liveAnnouncer.announce('Sorting cleared');
  //   }
  // }

}
