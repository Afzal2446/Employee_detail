import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpDataService } from 'app/service/emp-data.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<AddTaskComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private empData: EmpDataService) { }

  ngOnInit(): void {
  }
  postData(data: any) {
    this.empData.taskPost(data).subscribe((res: any) => {
      this.matDialogRef.close();
    });
  }
  close(){
    this.matDialogRef.close();
  }
}
