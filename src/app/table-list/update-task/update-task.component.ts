import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpDataService } from 'app/service/emp-data.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  
  ValueObject: any = {};

  constructor(private matDialogRef: MatDialogRef<UpdateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private empData: EmpDataService) { }

  ngOnInit(): void {
    this.ValueObject = this.data;
    this.ValueObject.estimated_Date = new Date(this.ValueObject.estimated_Date);
    console.log(this.ValueObject)
  }

  updateData(data: any) {
    console.warn("button Works");
    console.warn(data);
    this.empData.taskUpdate(data).subscribe((res: any) => {
      console.warn("Put method is " + res);
      this.matDialogRef.close();
    });
  }
  close() {
    this.matDialogRef.close();
  }
}
