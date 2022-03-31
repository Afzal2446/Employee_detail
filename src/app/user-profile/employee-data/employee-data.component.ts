import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmpDataService } from 'app/service/emp-data.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

  employee: any;
  constructor(private matDialogRef: MatDialogRef<EmployeeDataComponent>,
    @Inject(MAT_DIALOG_DATA) data, private empData: EmpDataService) {
    // this.employee = data.employee;
  }

  ngOnInit(): void {
  }
  postData(data: any) {
    console.warn("button Works");
    console.warn(data);
    this.empData.employeePost(data).subscribe((res:any)=> {
      console.warn("Post method is"+res);
    });
  }
  // onClose() {
  //   this.matDialogRef.close();
  // }
}
