import { Component, OnInit } from '@angular/core';
import { EmpDataService } from 'app/service/emp-data.service';
import { data } from 'jquery';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  employees:any;
  constructor(private empData:EmpDataService) { 
    empData.employee().subscribe((data)=>{
      console.warn("data",data);
      this.employees=data;
    })
  }
  ngOnInit() {
  }

}
