import { Component, OnInit } from '@angular/core';
import { EmpDataService } from 'app/service/emp-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userData:EmpDataService) { }

  ngOnInit() {
  }
  sendData(data:any){
    console.warn(data);
    this.userData.saveUsers(data).subscribe((result)=>
    console.warn(result));
  }
}
