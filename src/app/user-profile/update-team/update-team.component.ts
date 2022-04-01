import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpDataService } from 'app/service/emp-data.service';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css']
})
export class UpdateTeamComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<UpdateTeamComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private empData: EmpDataService) { }
    
    ValueObject: any = {};

  ngOnInit(): void {
    this.ValueObject = this.data;
  }
  updateData(data: any) {
    console.warn(data);
    this.empData.employeeUpdate(data).subscribe((res: any) => {
      this.matDialogRef.close();
    });
  }
  close() {
    this.matDialogRef.close();
  }
}
