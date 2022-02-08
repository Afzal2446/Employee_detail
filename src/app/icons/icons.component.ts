import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employeeData } from 'app/dashboard/employee';
import { EmpDataService } from 'app/service/emp-data.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  employee: any;
  employees:employeeData[]=[];
  constructor(private empData:EmpDataService) { 
    // empData.employee().subscribe((data)=>{
    //   this.employees=data;
    // })
    this.employee = empData.getSelectedEmploee();
  }
  // onBack():void{
  //   this.router.navigate(['/dashboard']);
  // }

  ngOnInit():void { 
  }
}
