import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpDataService } from 'app/service/emp-data.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<UpdateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private empData: EmpDataService) { }

  ngOnInit(): void {
  }
  updateData(data: any) {
    console.warn("button Works");
    console.warn(data);
    this.empData.taskUpdate(data).subscribe((res: any) => {
      console.warn("Put method is " + res);
    });
  }
}
