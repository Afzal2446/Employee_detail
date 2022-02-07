import { Component, OnInit,VERSION } from '@angular/core';
import { employeeData } from 'app/dashboard/employee';
import { EmpDataService } from 'app/service/emp-data.service';
import { data } from 'jquery';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent implements OnInit {
  constructor() {}
  taskList:any[]=[
    {
      "Task":"API Development",
      "Assigned_To":"Shubhankit",
      "Estimated_Date":"10/02/2022",
      "Current_Status":"In Progress"
    },
    {
      "Task":"Employee Detail",
      "Assigned_To":"Afzal Husain",
      "Estimated_Date":"05/02/2022",
      "Current_Status":"In Progress"
    },
    {
      "Task":"Employee Detail",
      "Assigned_To":"Riya Mishra",
      "Estimated_Date":"05/02/2022",
      "Current_Status":"Completed"
    },
    {
      "Task":"API Development",
      "Assigned_To":"Pranav AS",
      "Estimated_Date":"10/02/2022",
      "Current_Status":"Completed"
    },
    {
      "Task":"API Development",
      "Assigned_To":"KrupaShankar",
      "Estimated_Date":"10/02/2022",
      "Current_Status":"In Progress"
    },
  ]

  filterTask:any[]=[];

  private _filter:string='';
  get filter():string{
    return this._filter;
  }
  set filter(value:string){
    this._filter=value;
    console.warn('In setter',value);
    this.filterTask=this.performFilter(value);
  }
  performFilter(filterBy:string):any[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.taskList.filter((list:any)=>
      list.Task.toLocaleLowerCase().includes(filterBy));
  }

  ngOnInit(){
    this.filter=''
  }

  isDisc:boolean=false;
  sortTask(property) {
    this.isDisc=!this.isDisc;
    let direction= this.isDisc?1:-1;
    this.filterTask.sort(function(a:any,b:any){
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
}
