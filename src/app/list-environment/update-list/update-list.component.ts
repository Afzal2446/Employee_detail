import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpDataService } from 'app/service/emp-data.service';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.css']
})
export class UpdateListComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<UpdateListComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private empData: EmpDataService) { }

    ValueObject: any = {};

    ngOnInit(): void {
      this.ValueObject = this.data;
    }
    updateData(data: any) {
      console.warn(data);
      this.empData.updateLab(data).subscribe((res: any) => {
        this.matDialogRef.close();
      });
    }
    close() {
      this.matDialogRef.close();
    }
}
