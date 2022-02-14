import { Component, OnInit,VERSION } from '@angular/core';
import { employeeData } from 'app/dashboard/employee';
import { EmpDataService } from 'app/service/emp-data.service';
import { data } from 'jquery';
import { taskData } from './task';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent implements OnInit {

  tasks:taskData[]=[];
  constructor(private empData:EmpDataService) { 
    // empData.employee().subscribe((data)=>{
    //   this.employees=data;
    // })
    this.tasks = empData.getSelectedTask();
    console.warn(this.tasks);
  }

  filterTask:taskData[]=[];
  private _filter:string='';
  get filter():string{
    return this._filter;
  }
  set filter(value:string){
    this._filter=value;
    console.warn('In setter',value);
    this.filterTask=this.performFilter(value);
  }

  performFilter(filterBy:string):taskData[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.tasks.filter((list:taskData)=>
      list.Task.toLocaleLowerCase().includes(filterBy));
  }

  // Sorting........
  isDisc:boolean=false;
  sortTask(property) {
    this.isDisc=!this.isDisc;
    let direction= this.isDisc?1:-1;
    this.tasks.sort(function(a:any,b:any){
      if(a[property]<b[property]){
        return -1*direction;
      }
      else if(a[property]>b[property]){
        return 1*direction;
      }
      else{
        return 0;
      }
    });
  }

  ngOnInit() {
    this.filter="";
  }
}
