import { Component, OnInit } from '@angular/core';
import { employeeData } from './employee';
import { EmpDataService } from 'app/service/emp-data.service';
import { Router } from '@angular/router';
import { taskData } from 'app/table-list/task';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employees:employeeData[]=[];
  filterEmployee:employeeData[]=[];

  constructor(private empData: EmpDataService, private router: Router) {}


  private _filter:string='';
  get filter():string{
    return this._filter;
  }
  set filter(value:string){
    this._filter=value;
    // console.warn('In setter',value);
    this.filterEmployee=this.performFilter(value);
  }

  performFilter(filterBy:string):employeeData[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.employees.filter((list:employeeData)=>
      list.name.toLocaleLowerCase().includes(filterBy));
  }

  //Task related code......
  tasks:taskData[]=[];
  filterTask:taskData[]=[];
  private _filterTask:string='';
  get taskFilter():string{
    return this._filterTask;
  }
  set taskFilter(value:string){
    this._filterTask=value;
    // console.warn('In setter',value);
    this.filterTask=this.performFilterTask(value);
  }
  performFilterTask(filterby:string):taskData[]{
    filterby=filterby.toLocaleLowerCase();
    return this.tasks.filter((list:taskData)=>
      list.task.toLocaleLowerCase().includes(filterby)||
      list.Assigned_to.toLocaleLowerCase().includes(filterby));
  }
  

  ngOnInit():void {
    this.filter='';
    
    this.empData.task().subscribe({
      next:tasks=>{
        this.tasks=tasks;
        // console.log(tasks);
        this.filterTask=[...this.tasks];
        this.filterTask = this.filterTask.splice(0, 3);
        // console.warn(this.filterTask);
      }
    })
  }

  showListEmployee:boolean=false; 
  toggleEmployee(){
    this.showListEmployee= !this.showListEmployee;
    this.router.navigateByUrl('/user-profile');
    this.showMoreEmployee();
    this.onEmployeeSelected(this.employees);
  }   
  onEmployeeSelected(filterEmployee: any) {
    this.empData.setSelectedEmployee(filterEmployee);
  }
  showMoreEmployee():any {
    if (this.showListEmployee) {
      // this.filterEmployee = [...this.employees];
    } else {
      this.filterEmployee = this.filterEmployee.splice(0, 3);
    }
  }

  showListTask:boolean=false;
  toggleTask(){
    this.showListTask= !this.showListTask;
    this.router.navigateByUrl('/table-list');
    this.showMoreTask();
    this.onTaskSelected(this.tasks);
  }   
  onTaskSelected(filterTask: any) {
    this.empData.setSelectedTask(filterTask);
  }
  showMoreTask():any {
    if (this.showListTask) {
      // this.filterTask = [...this.tasks];
    } else {
      this.filterTask = this.filterTask.splice(0, 3);
    }
  }
  
  // Filtering by name
  isDisc:boolean=false;
  sortEmployee(property) {
    this.isDisc=!this.isDisc;
    let direction= this.isDisc?1:-1;
    this.filterEmployee.sort(function(a:any,b:any){
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
