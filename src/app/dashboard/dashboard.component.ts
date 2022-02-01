import { Component, OnInit } from '@angular/core';
import { employeeData } from './employee';
import { EmpDataService } from 'app/service/emp-data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employees:employeeData[]=[];
  filterEmployee:employeeData[]=[];

  constructor(private empData:EmpDataService) {}


  private _filter:string='';
  get filter():string{
    return this._filter;
  }
  set filter(value:string){
    this._filter=value;
    console.log('In setter',value);
    this.filterEmployee=this.performFilter(value);
  }

  performFilter(filterBy:string):employeeData[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.employees.filter((list:employeeData)=>
      list.Name.toLocaleLowerCase().includes(filterBy)||
      list.Current_Task.toLocaleLowerCase().includes(filterBy));
  }
  ngOnInit():void {
    this.empData.employee().subscribe({
      next:employees=>{
        this.employees=employees;
        this.filterEmployee=this.employees;
      }
    });
  }     
}
