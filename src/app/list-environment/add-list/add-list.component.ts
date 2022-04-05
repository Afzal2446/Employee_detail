import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpDataService } from 'app/service/emp-data.service';


@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<AddListComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private empData: EmpDataService) { }

  ngOnInit(): void {
  }
  postData(data: any) {
    console.log(data);
    this.empData.postLab(data).subscribe((res:any)=> { 
      this.matDialogRef.close();
    });
  }
  close() {
    this.matDialogRef.close();
  }
}
