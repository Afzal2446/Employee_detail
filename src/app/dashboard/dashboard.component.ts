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

  constructor(private empData: EmpDataService) {}


  private _filter:string='';
  get filter():string{
    return this._filter;
  }
  set filter(value:string){
    this._filter=value;
    console.warn('In setter',value);
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
        console.warn(this.employees);
        this.filterEmployee=[...this.employees];
        this.filterEmployee = this.filterEmployee.splice(0, 5);
      }
    });
  }
  showList:boolean=false; 
  buttonToggle(){
    this.showList= !this.showList;
    this.showMoreRecords();
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

  showMoreRecords() {
    if (this.showList) {
      this.filterEmployee = [...this.employees];
      let employees = []
      employees = [1,2,3,4,5]; // 1,5
      let permanentEmployees = [...employees];
    } else {
      this.filterEmployee = this.filterEmployee.splice(0, 5);
    }
  }

  onEmployeeSelected(employee: any) {
    this.empData.setSelectedEmployee(employee);
  }
}
