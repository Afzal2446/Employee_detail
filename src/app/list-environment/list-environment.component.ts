import { Component, OnInit } from '@angular/core';
import { EmpDataService } from 'app/service/emp-data.service';

@Component({
  selector: 'app-list-environment',
  templateUrl: './list-environment.component.html',
  styleUrls: ['./list-environment.component.css']
})
export class ListEnvironmentComponent implements OnInit {

  resultArray:any;
  constructor(private empData:EmpDataService) {
    this.resultArray=empData.getSelectedEnvironment();
  //   console.log(this.resultArray)
  //    this.resultArray = Object.keys(this.resultArray).map(index => {
  //     let envList = this.resultArray[index];
  //     return {
  //       index: envList
  //     };
  // });
    console.log(this.resultArray);
   }
  ngOnInit(): void {
  }

}
