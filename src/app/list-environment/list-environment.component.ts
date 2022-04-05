import { Component, OnInit } from '@angular/core';
import { EmpDataService } from 'app/service/emp-data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TransitionCheckState } from '@angular/material/checkbox';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import { UpdateListComponent } from './update-list/update-list.component';
import { AddListComponent } from './add-list/add-list.component';

@Component({
  selector: 'app-list-environment',
  templateUrl: './list-environment.component.html',
  styleUrls: ['./list-environment.component.css']
})
export class ListEnvironmentComponent implements OnInit {


  constructor(private empData: EmpDataService, private router: Router,private matDialog: MatDialog) { }

  environmentsCopy: any;
  searchText: string = '';
  selectedItem: any;
  environments: any[];
  labData: any;
  labName: any;

  getData() {
    this.environments = this.empData.getSelectedEnvironment();
    this.empData.getLabData(this.environments[0].labData).subscribe(res => {
      this.labData = res;
    })
    this.labName = this.empData.getValue();
    console.warn(this.labName);
    // console.warn(this.environments[0].labData);
    this.environmentsCopy = [...this.environments];
  }

  // initialShowEnv(){
  //   this.empData.initialShowEnvironment().subscribe(res=>{
  //     this.environments=res;
  //   })
  //   this.environmentsCopy = [...this.environments];
  // }
  // initialShowData(){
  //   this.empData.initialShowData().subscribe(res=>{
  //     this.labData=res;
  //   });
  // this.initialShowEnv();

  ngOnInit(): void {
    setTimeout(() => { this.getData(); }, 200);

    // setTimeout(() => {this.initialShowData();}, 1000);
    // this.getData();
    // console.log("Service called")
    // console.log(this.environments);
  }

  filter() {
    this.environments = this.environmentsCopy;
    let environmentsNew = this.environments.filter((target: any) => {
      return target.labData.toLowerCase().includes(this.searchText.toLowerCase())
    });
    this.environments = environmentsNew;
  }

  onMenuSelected(event: any) {
    this.selectedItem = this.environmentsCopy.find((target: any) => {
      return target.labData.toLowerCase().includes(event.value.toLowerCase())
    });
    // console.warn(this.selectedItem.labData);
    this.labData = this.empData.getLabData(this.selectedItem.labData).subscribe(res => {
      this.labData = res;
    })
  }
  goBack() {
    console.log("Back button works");
    this.router.navigateByUrl("/typography");
  }
  openDialog() {
    console.log("dilog works");
    let dialogConfig = new MatDialogConfig();
    dialogConfig.height = '450px';
    dialogConfig.width = '420px';
    // dialogConfig.data = {
    //   employee:employee
    // };

    let dialog = this.matDialog.open(AddListComponent, dialogConfig);

    dialog.afterClosed().subscribe((res: any) => {
      // console.log(res);
    });
  }
  updateLab(id:number){
    let dialogConfig=new MatDialogConfig();
    dialogConfig.height = '450px';
    dialogConfig.width = '420px';
    dialogConfig.data = this.labData.find((labData: any)=>{return labData.id == id});
    let dialog = this.matDialog.open(UpdateListComponent,dialogConfig);
  }
}
