import { Component, OnInit } from '@angular/core';
import { EmpDataService } from 'app/service/emp-data.service';
import { employeeData } from 'app/dashboard/employee';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  employees:employeeData[]=[];
  filterEmployee:employeeData[]=[];
  constructor(private empData:EmpDataService) { 
    // empData.employee().subscribe((data)=>{
    //   this.employees=data;
    // })
    this.employees = empData.getSelectedEmploee();
    // console.warn(this.employees);
  }

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
      list.Name.toLocaleLowerCase().includes(filterBy));
  }
  //sorting.........
  isDisc:boolean=false;
  sortEmployee(property) {
    this.isDisc=!this.isDisc;
    let direction= this.isDisc?1:-1;
    this.employees.sort(function(a:any,b:any){
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

  ngOnInit():void {
    this.filter='';
  }
}
