import { Component, OnInit } from '@angular/core';
import { EmpDataService } from 'app/service/emp-data.service';
import { employeeData } from 'app/dashboard/employee';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import { EmployeeDataComponent } from './employee-data/employee-data.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  employees:employeeData[]=[];
  filterEmployee:employeeData[]=[];
  constructor(private empData:EmpDataService, private matDialog: MatDialog) { 
    // empData.employee().subscribe((data)=>{
    //   this.employees=data;
    // })
    this.employees = empData.getSelectedEmploee();
  }

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
  //sorting.........
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

  ngOnInit():void {
    this._filter='';
    this.filterEmployee=[...this.employees];
  }

  openDialog(employee) {

    let dialogConfig = new MatDialogConfig();
    dialogConfig.height = '300px';
    dialogConfig.width = '300px';
    dialogConfig.data = {
      employee:employee
    };

    let dialog = this.matDialog.open(EmployeeDataComponent, dialogConfig);

    dialog.afterClosed().subscribe((res: any) => {
      // console.log(res);
    });
  }
}
