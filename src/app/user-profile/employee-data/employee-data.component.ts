import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

  employee: any;

  constructor(private matDialogRef: MatDialogRef<EmployeeDataComponent>,
     @Inject(MAT_DIALOG_DATA) data) {
      this.employee = data.employee;
     }

  ngOnInit(): void {
    
  }

  onClose() {
    this.matDialogRef.close();
  }
}
